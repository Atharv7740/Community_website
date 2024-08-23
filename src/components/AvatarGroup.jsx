const avatars = [
    { id: 1, src: 'https://img.freepik.com/premium-psd/college-student-3d-icon-avatar-people_431668-1320.jpg' },
    { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt5sCYEdVpYJfdBo73NRSn4XUVnix-UX7Yg0N1nt9npoM3ytGuH-RcWgzAaRKGem9ONk&usqp=CAU' },
    { id: 3, src: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--study-school-graduation-profession-pack-people-icons-8179543.png?f=webp' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGepBKqzKdD0I_TLiihMc-OFpu4-rshOtuPA&s'}
    // Add more avatars as needed
  ];
  


const getRandomPosition = () => {
  const r = 120; // Radius of the circular area
  const angle = Math.random() * 2 * Math.PI; // Random angle
  const x = r * Math.cos(angle); // X position
  const y = r * Math.sin(angle); // Y position
  return { x, y };
};

const AvatarGroup = () => {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto right-[-150px]">
      {avatars.map((avatar, index) => {
        const { x, y } = getRandomPosition();
        return (
          <div key={avatar.id}
            className="absolute transform hover:scale-110 transition-transform duration-300"
            style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}>
            <img src={avatar.src} alt={`avatar-${index}`} className="w-[150px] h-[150px] rounded-full" />
          </div>
        );
      })}
    </div>
  );
};

export default AvatarGroup;

