import * as React from 'react';
/* eslint-disable max-len */

import { PostbackCallbackProps, PostbackCallbackFuntion } from './types';
import * as sendTypes from 'facebook-sendapi-types';
// require('./scss/conversation.scss');

import GenericTemplate from './generic-template';
import ButtonTemplate from './button-template';
import TextMessage from './text-message';
import QuickReplies from './quick-replies';
import SenderActions from './sender-actions';
import ImageTemplate from './image-template';
import VideoTemplate from './video-template';
import AudioTemplate from './audio-template';

import { hash } from '../helpers/hash';

export function TemplateMessage(props: sendTypes.MessengerPayload & PostbackCallbackProps) {
  switch (props.message.attachment.payload.template_type) {
    case 'generic':
      return <GenericTemplate postbackCallback={props.postbackCallback} {...props.message.attachment.payload} />;

    case 'button':
      return <ButtonTemplate postbackCallback={props.postbackCallback} {...props.message.attachment.payload} />;

    default:
      return (<div className="error" />);
  }
}

export function AttachementMessage(props: sendTypes.MessengerPayload & PostbackCallbackProps) {
  switch (props.message.attachment.type) {
    case 'template':
      return <TemplateMessage postbackCallback={props.postbackCallback} {...props} />;

    case 'image':
      return <ImageTemplate {...props.message.attachment} />

    case 'video':
      return <VideoTemplate {...props.message.attachment} />

    case 'audio':
      return <AudioTemplate {...props.message.attachment} />

    default:
      return (<div className="error" />);
  }
}

export function Bubble(props: sendTypes.MessengerPayload & PostbackCallbackProps) {
  if (props.sender_action) {
    return <span />;
  }

  if (props.message && props.message.text) {
    // text message
    return <TextMessage {...props.message} />;
  }

  if (props.message && props.message.attachment) {
    return <AttachementMessage postbackCallback={props.postbackCallback} {...props} />;
  }

  return (<div className="error" />);
}

// function needsToBeSmall(bubble: Array<sendTypes.MessengerPayload>) {
//   for (let i = 0; i < bubble.length; i++) {
//     if (bubble[i].message) {
//       if (bubble[i].message.attachment) {
//         if (bubble[i].message.attachment.type === 'template') {
//           if (bubble[i].message.attachment.payload.template_type === 'button') {
//             return true;
//           }
//           if (bubble[i].message.attachment.payload.template_type === 'generic') {
//             if (bubble[i].message.attachment.payload.elements.length === 1) {
//               return true;
//             }
//           }
//         }
//       }
//     }
//   }
//   return false;
// }

export interface Props {
  conversation: Array<sendTypes.MessengerPayload>;
  page_id: string;
  postbackCallback: PostbackCallbackFuntion;
}

export interface State {

}

function addUniqueMid(conversation: Array<sendTypes.MessengerPayload>): Array<sendTypes.MessengerPayload> {
  for(let i = 0; i < conversation.length; i++) {
    const message: sendTypes.WebhookPayload = conversation[i] as sendTypes.WebhookPayload;
    // console.log(message.toString());
    if (!message.message.mid) {
      message.message.mid = hash(JSON.stringify(message));
      conversation[i] = message;
    }
  }
  return conversation;
}

function filterConversation(conversation: Array<sendTypes.MessengerPayload>): Array<sendTypes.MessengerPayload> {
  return conversation.filter(line => {
    if (line.sender_action) {
      return false;
    }
    return true;
  });
}

export default class Conversation extends React.Component<Props, State> { // eslint-disable-line
  render() {
    // split into an array of arrays.
    // inside array is user's or bot's' bubbles
    const filteredConversation = filterConversation(this.props.conversation);
    addUniqueMid(filteredConversation);

    if (filteredConversation.length < 1) {
      return (<div className="empty" />);
    }

    const masterArray:Array<Array<sendTypes.MessengerPayload>> = [];
    let bubbleArray = [filteredConversation[0]];
    for (let i = 1; i < filteredConversation.length; i++) {
      const lastMessage = bubbleArray[bubbleArray.length - 1];
      const currentMessage = filteredConversation[i];
      if (lastMessage.recipient.id !== currentMessage.recipient.id) {
        masterArray.push(bubbleArray);
        bubbleArray = [];
      }
      bubbleArray.push(currentMessage);
    }
    masterArray.push(bubbleArray);

    const bubbles = masterArray.map((setOfMessages, index) => (
      <div key={`${index}-${hash(JSON.stringify(setOfMessages))}`} className={`bubble ${this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self'}`}>
        <div className="multi">
          {setOfMessages
            .filter(payload => payload.message) // display only messages
            .map((payload: sendTypes.WebhookPayload) => {
              return <Bubble key={payload.message.mid} postbackCallback={this.props.postbackCallback} {...payload} />;
            })
            }
        </div>
      </div>
    ));
    const lastMessage = bubbleArray[bubbleArray.length - 1];
    const quickReplies = lastMessage.message && lastMessage.message.quick_replies ? <QuickReplies {...lastMessage.message} postbackCallback={this.props.postbackCallback} /> : null; // eslint-disable-line
    const senderActions = lastMessage.sender_action ? (
      <div className={'bubble self'}>
        <div className={'multi'}>
          <SenderActions sender_action={lastMessage.sender_action} />
        </div>
      </div>
    ) : null;

    return (
      <div className="conversation">
        {bubbles}
        {quickReplies}
        {senderActions}
      </div>
    );
  }
}
