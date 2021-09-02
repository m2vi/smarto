import Image from 'next/image';

const Avatar = ({ src, alt }) => {
  return (
    <div className="bg-primary-700 select-none inline-block align-middle h-8 w-8 rounded">
      {src !== '' && <Image className="no-drag select-none max-w-full w-8 h-8 rounded" width="128px" height="128px" src={src} alt={alt}></Image>}
    </div>
  );
};

export default Avatar;
