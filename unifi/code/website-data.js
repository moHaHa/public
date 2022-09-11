export const hero_data = {
  timer: '2022/09/15 2:00:00',
  infoLine1: 'W Dubai - The Palm - Jumeirah Dubai UAE',
  infoLine2: 'November 22, 2022',
  circle1: {
    greenText: '500+M',
    whiteText: 'IoT Connected Devices 1'
  },
  circle2: {
    greenText: '500+M',
    whiteText: 'IoT Connected Devices 2'
  },
  circle3: {
    greenText: '500+M',
    whiteText: 'IoT Connected Devices 3'
  },
}
export const static_section_door_open = {
  component: "mh-section-title", // don't change those names evenr
  content: {
    icon: require("@/assets/door-open.svg"),
    whiteText: "Door Open / Networking",
    time: "14:30 - 16:00 PM",
  },
};
export const static_section_speakers_1 = {
  component: "mh-speakers-section",
  content: {
    whiteTitle: "Speakers",
    greenTitle: "List",
    date: "November 22, 2022",
    location: "Dubai, U.A.E",
    time: "16:00 - 16:20 PM",
    cards: [
      {
        time: "16:00 - 16:10 PM",
        name: "Mr. Naji Sakhita",
        job: "CEO",
        greenJob: "Intel",
        // for avatar you can do :
        // 1. add image url  , or
        // 2. add image in assets folder and replace avatar url with this line
        // avatar: require('@/assets/image-name.png') // it can be "svg" or "jpg" also
        avatar:
          "https://i.pinimg.com/564x/1d/93/35/1d93356e11da1aa11acfab1333397585.jpg",
        anonymous: false,
        descriptionPoints: [
          {
            icon: "mdi-account", // visit for more icons : https://pictogrammers.github.io/@mdi/font/5.4.55
            text: "sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!",
          },
          {
            icon: "mdi-account",
            text: "sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!",
          },
        ],
      },
      {
        // this card has anonymous data and it's blur , you can just delete this object
        blur: true,
      },
    ],
  },
};
export const static_section_Discussion_1 = {
  component: "mh-discussion-section",
  content: {
    whiteText: "Discussion",
    greenText: "Panel",
    title: "LPWAN Role in IoT",
    time: " 16:20 - 17:10 PM",
    description:
      "Lorem ipsum dolor ---s sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt",
    static_person_1: {
      lead: "Moderator 1",
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 8, y: -30 },
        xl: { x: 8, y: -30 },
      },
    },
    static_person_2: {
      name: "Mr. Nishat Chida 2",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: -92, y: -44 },
        xl: { x: -156, y: -56 },
      },
    },
    static_person_3: {
      name: "Mr. Nishat Chida 3",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 90, y: -90 },
        xl: { x: 155, y: -56 },
      },
    },
    static_person_4: {
      name: "Mr. Nishat Chida 4",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 71, y: 81 },
        xl: { x: 156, y: 92 },
      },
    },
    static_person_5: {
      name: "Mr. Nishat Chida 5",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 110, y: 0 },
        xl: { x: 180, y: -11 },
      },
    },
    static_person_6: {
      name: "Mr. Nishat Chida 6",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 150, y: 132 },
        xl: { x: 193, y: 118 },
      },
    },
    static_person_7: {
      name: "Mr. Nishat Chida 7",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 173, y: 195 },
        xl: { x: 266, y: 206 },
      },
    },
    static_person_8: {
      lead: "Moderator 1",
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 78, y: -88 },
        xl: { x: 159, y: -75 },
      },
    },
  },
};
export const static_section_coffee_break = {
  component: "mh-section-title",
  content: {
    icon: require("@/assets/coffee-break.svg"),
    time: "18:20 - 19:00 PM",
    whiteText: "Coffee",
    greenText: "Break",
  },
};
export const static_section_speakers_2 = {
  component: "mh-speakers-section",
  content: {
    whiteTitle: "Speakers",
    greenTitle: "List",
    date: "November 22, 2022",
    location: "Dubai, U.A.E",
    time: "16:00 - 16:20 PM",
    cards: [
      {
        time: "16:00 - 16:10 PM",
        name: "Mr. Naji Sakhita",
        job: "CEO",
        greenJob: "Intel",
        // for avatar you can do :
        // 1. add image url  , or
        // 2. add image in assets folder and replace avatar url with this line
        // avatar: require('@/assets/image-name.png') // it can be "svg" or "jpg" also
        avatar:
          "https://i.pinimg.com/564x/1d/93/35/1d93356e11da1aa11acfab1333397585.jpg",
        anonymous: false,
        descriptionPoints: [
          {
            icon: "mdi-account", // visit for more icons : https://pictogrammers.github.io/@mdi/font/5.4.55
            text: "sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!",
          },
          {
            icon: "mdi-account",
            text: "sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!",
          },
        ],
      },
      {
        // this card has anonymous data and it's blur , you can just delete this object
        blur: true,
      },
    ],
  },
};
export const static_section_Discussion_2 = {
  component: "mh-discussion-section",
  content: {
    whiteText: "Discussion",
    greenText: "Panel",
    title: "LPWAN Role in IoT",
    time: " 16:20 - 17:10 PM",
    description:
      "Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt",
    static_person_1: {
      lead: "Moderator 1",
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 8, y: -30 },
        xl: { x: 8, y: -30 },
      },
    },
    static_person_2: {
      name: "Mr. Nishat Chida 2",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: -92, y: -44 },
        xl: { x: -156, y: -56 },
      },
    },
    static_person_3: {
      name: "Mr. Nishat Chida 3",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 90, y: -90 },
        xl: { x: 155, y: -56 },
      },
    },
    static_person_4: {
      name: "Mr. Nishat Chida 4",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 71, y: 81 },
        xl: { x: 156, y: 92 },
      },
    },
    static_person_5: {
      name: "Mr. Nishat Chida 5",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 110, y: 0 },
        xl: { x: 180, y: -11 },
      },
    },
    static_person_6: {
      name: "Mr. Nishat Chida 6",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 150, y: 132 },
        xl: { x: 193, y: 118 },
      },
    },
    static_person_7: {
      name: "Mr. Nishat Chida 7",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 173, y: 195 },
        xl: { x: 266, y: 206 },
      },
    },
    static_person_8: {
      lead: "Moderator 1",
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 78, y: -88 },
        xl: { x: 159, y: -75 },
      },
    },
  },
};
export const static_section_speech_closing = {
  text: 'Speech Closing',
  time: '21:00 - 21:10 PM'
}
export const static_section_dinner = {
  component: "mh-section-title", // don't change those names evenr
  content: {
    icon: require("@/assets/dinner-icon.svg"),
    whiteText: "Dinner / Networking",
    time: "21:10 - 23:30 PM",
  },
};

export const mh_honorary_guest_section = {
  component: "mh-honorary-guest-section",
  content: {
    whiteText: "Honorary",
    greenText: "Guest List",
    static_person_1: {
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: -32, y: 70 },
        xl: { x: -32, y: 70 },
      },
    },
    static_person_2: {
      name: "Mr. Nishat Chida 2",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: -50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 42, y: 100 },
        xl: { x: 42, y: 100 },
      },
    },
    static_person_3: {
      name: "Mr. Nishat Chida 3",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 113, y: 50 },
        xl: { x: 113, y: 50 },
      },
    },
    static_person_4: {
      name: "Mr. Nishat Chida 4",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: -50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 100, y: -110 },
        xl: { x: 100, y: -110 },
      },
    },
    static_person_5: {
      name: "Mr. Nishat Chida 5",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 70, y: 0 },
        xl: { x: 30, y: 50 },
      },
    },
    static_person_6: {
      name: "Mr. Nishat Chida 6",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: -50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 72, y: 150 },
        xl: { x: 142, y: 150 },
      },
    },
    static_person_7: {
      name: "Mr. Nishat Chida 7",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: 50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 113, y: 70 },
        xl: { x: 213, y: 70 },
      },
    },
    static_person_8: {
      lead: "Moderator 1",
      name: "Mr. Nishat Chida 1",
      country: "UAE",
      whiteText: "Head of Assets",
      greenText: "WASL Properties",
      avatar: require("@/assets/user-cyrcle.svg"),
      avatarSize: 100,
      defaultImage: false,
      movePoints: {
        default: { x: -50, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 100, y: -110 },
        xl: { x: 200, y: -110 },
      },
    },
  },
};
export const people = [
  {
    name: "name 1",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",
    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 2",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",
    image:
      "https://i.pinimg.com/564x/f4/ce/ba/f4ceba828f9b9770899f33a53cdaef91.jpg",
  },
  {
    name: "name 3",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/236x/84/a3/5b/84a35ba61ff1b512e6867b8cfe83f82c.jpg",
  },
  {
    name: "name 4",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/236x/b1/47/be/b147be309ce6a4dd1e108942988ccd5d.jpg",
  },
  {
    name: "name 5",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 6",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/236x/6a/6c/bd/6a6cbd46d6385e9b6a654d2d1f073409.jpg",
  },
  {
    name: "name 7",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 8",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/236x/c5/f7/6f/c5f76ffcbbd0352abefb2b63dea7f7da.jpg",
  },
  {
    name: "name 9",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 10",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 11",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
  {
    name: "name 12",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/236x/6a/6c/bd/6a6cbd46d6385e9b6a654d2d1f073409.jpg",
  },
  {
    name: "name 13",
    job: "job",
    info: "info   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta asperiores dicta tempora natus. Eum harum, mollitia fugiat, non magnam ad voluptatibus id quia nesciunt iure perferendis illum laudantium! A?",

    image:
      "https://i.pinimg.com/564x/0c/b1/2f/0cb12f67f6dacd22728f4516eef9d2d6.jpg",
  },
]
