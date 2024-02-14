import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Join the Community',
      title: 'Join the Community',
      description:
        'Discord community for students based on their courses where they discuss issues.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat Communication',
      title: 'Chat Communication',
      description:
        'Students support guide available round the clock to provide best real-time support.',
    },
    {
      id: 3,  
      iconSrc: Github,
      altText: 'Social Updates',
      title: 'Social Updates',
      description:
        'Keep your eyes on the daily instagram updates to get the latest updates about your course.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/privacy',
      label: 'Privacy Policy',
    },
    {
      path: '/terms',
      label: 'Terms of Service',
    },
    {
      path: 'https://discord.gg/BE3JjAaMHJ',
      label: 'Community',
    },
    {
      path: 'https://api.whatsapp.com/send?phone=00923259594093',
      label: 'Support',
    },
  ],
};
