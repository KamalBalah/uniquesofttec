import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"./unique_soft.svg"}
      width={200}
      height={200}
      alt="Unique Soft Logo"
    />
  );
};

export default Logo;
