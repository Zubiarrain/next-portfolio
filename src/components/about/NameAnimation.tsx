import { TypeAnimation } from "react-type-animation";

export const NameAnimation = () => {

    
      return (
        <h1 className="text-blue-400 mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                2000,
                "Nahuel Zubiarrain",
                1000,
                "Solutions Developer",
                1000,
                "Civil Engineer",
                1000,
                "Hydraulic Engineer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
        </h1>
      );
}