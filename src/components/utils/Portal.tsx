import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: JSX.Element;
};

const Portal: FunctionComponent<PortalProps> = ({ children }) => {
  const mount: HTMLElement | null = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (!mount) return;
    mount.appendChild(el);
    return () => {
      if (!mount) return;
      mount.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
