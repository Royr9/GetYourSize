import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type DeviceSizeType = "mobile" | "tablet" | "laptop" | "monitor";

type DeviceSizeContextType = {
  deviceSize: DeviceSizeType;
  setDeviceSize: React.Dispatch<React.SetStateAction<DeviceSizeType>>;
};

const DeviceSizeContext = createContext({} as DeviceSizeContextType);

export const UseDeviceSizeContext = () => {
  return useContext(DeviceSizeContext);
};

export const DeviceSizeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [deviceSize, setDeviceSize] = useState<DeviceSizeType>(
    {} as DeviceSizeType
  );

  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update viewPortWidth whenever the window is resized
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewPortWidth < 600) {
      setDeviceSize("mobile");
    } else if (viewPortWidth >= 600 && viewPortWidth <= 850) {
      setDeviceSize("tablet");
    } else if (viewPortWidth >= 850 && viewPortWidth <= 1600) {
      setDeviceSize("laptop");
    } else {
      setDeviceSize("monitor");
    }
  }, [viewPortWidth]);

  return (
    <DeviceSizeContext.Provider value={{ deviceSize, setDeviceSize }}>
      {children}
    </DeviceSizeContext.Provider>
  );
};
