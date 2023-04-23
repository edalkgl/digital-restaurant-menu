import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  priority?: boolean | undefined;
  className?: string | undefined;
  unoptimized?: boolean | undefined;
}

const AppImage: React.FC<IProps> = ({
  src,
  alt,
  width,
  height,
  priority,
  className,
  unoptimized
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      unoptimized={unoptimized}
    />
  );
};

export default AppImage;
