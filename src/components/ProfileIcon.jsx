import Image from "next/image";

export function ProfileIcon() {

  const github = 'https://avatars.githubusercontent.com/galenomoon';
  return (
    <section className="flex relative items-center justify-center">
      <div className="rounded-full flex flex-col items-center overflow-hidden justify-center w-[44px] h-[44px] bg-blue-400 flex-shrink-0">
        <img src={github} className="w-[44px] h-[44px]" />
      </div>
      <div className="rounded-full absolute w-[18px] h-[18px] -right-1 -top-1 bg-primary border-2 border-white" />
    </section>
  );
}