import { images } from "../constants";

const generateGxgLink = (name) => {
  // Get the first 3 letters of the name and convert to uppercase
  const namePart = name.slice(0, 3).toUpperCase();
  // Generate a 6-digit random code
  const randomCode = Math.floor(100000 + Math.random() * 900000);
  return `GXG_${namePart}${randomCode}`;
}

const gxgData = [
  {
    id: 1,
    name: 'Gym Membership',
    avatar: images.Person,
    isPinned: true,
    time: '02:45PM',
    description: 'This is a sample description for Soft Leonard\'s GXG.',
    membershipPrice: 'FTN 2,000',
    gxgLink: null, // Removed hardcoded link
    conversations: [], // Empty conversation array
    members: [
      {
        name: "Jason",
        joined: "19/12/2023"
      },
      {
        name: "Michael",
        joined: "21/02/2023"
      },
      {
        name: "Joshua",
        joined: "03/04/2023"
      },
    ], // Example members
  },
  {
    id: 2,
    name: "33's Kitchen",
    avatar: images.profile,
    unreadCount: 1,
    time: '02:45PM',
    description: 'No description provided for Paul Erstein\'s GXG.',
    membershipPrice: 'FTN 1,500',
    gxgLink: null, // Removed hardcoded link
    conversations: [], // Empty conversation array
    members: [
      {
        name: "Isaac",
        joined: "19/12/2023"
      },
      {
        name: "Leonard",
        joined: "21/02/2023"
      },
      {
        name: "Jason",
        joined: "03/04/2023"
      },
    ],
  },
  {
    id: 3,
    name: 'GranularX Ethics Group',
    avatar: images.Person,
    time: '02:45PM',
    description: 'Another GXG by Soft Leonard.',
    membershipPrice: 'FTN 3,000',
    gxgLink: null, // Removed hardcoded link
    conversations: [], // Empty conversation array
    members: [
      {
        name: "Alice",
        joined: "19/12/2023"
      },
      {
        name: "Tessy",
        joined: "21/02/2023"
      },
      {
        name: "Julius",
        joined: "03/04/2023"
      },
    ],
  },
  {
    id: 4,
    name: 'SpaceX Parody',
    avatar: images.Person,
    time: '02:45PM',
    description: 'Yet another GXG by Soft Leonard.',
    membershipPrice: 'FTN 2,500',
    gxgLink: null, // Removed hardcoded link
    conversations: [], // Empty conversation array
    members: [
      {
        name: "Elon",
        joined: "19/12/2023"
      },
      {
        name: "Samuel",
        joined: "21/02/2023"
      },
      {
        name: "Charles",
        joined: "03/04/2023"
      },
    ],
  },
];

// Generate gxgLink for each object in the array if it is not already provided
gxgData.forEach(item => {
  if (!item.gxgLink) {
    item.gxgLink = generateGxgLink(item.name);
  }
});

export default gxgData;
