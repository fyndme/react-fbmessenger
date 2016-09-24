var React = require('react');
var ReactDOM = require('react-dom');

var Conversation = require('../dist/conversation');
var conversation = [
{
"recipient":{
	"id":"1"
},
"message":{
	"text":"text"
}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"hello, world!"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"image"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"image",
      "payload":{
        "url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"audio"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"audio",
      "payload":{
        "url":"https://petersapparel.com/bin/clip.mp3"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"video"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"video",
      "payload":{
        "url":"http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_1mb.mp4"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"file"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"file",
      "payload":{
        "url":"https://petersapparel.com/bin/receipt.pdf"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"button template"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What's next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"Quick Replies"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "text":"Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Red",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
      },
      {
        "content_type":"text",
        "title":"Green",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
      }
    ]
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 2 elements"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 8 elements"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element & top text"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"Just 1 element"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element, top text, bottom text"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"On top"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"On bottom"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"line 1"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"This is a very long lone following a shorter line."
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"This is a very long button prompt for the user to answer to. It should nicely wrap around to multiple lines.",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"image with header"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"This is a long header for the image below..."
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"image",
      "payload":{
        "url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg"
      }
    }
  }
},
];
ReactDOM.render(
	React.createElement(Conversation.default, {conversation: conversation, page_id: '1'}), 
	document.getElementById('root')
);