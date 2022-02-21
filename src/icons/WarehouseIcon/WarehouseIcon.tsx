import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

const Warehouse = ({ style, className }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      className={`${className}`}
      style={{ width: "24px", height: "24px" }}
      viewBox="0 0 24 24"
    >
      <path
        d="M20.3331 10.4287H3.60022V23.9986H20.3331V10.4287Z"
        fill="#40596B"
      />
      <path
        d="M20.3331 10.4287H3.60022V11.3592H20.3331V10.4287Z"
        fill="#334A5E"
      />
      <path
        d="M11.2702 18.7632H5.25024V24.0002H11.2702V18.7632Z"
        fill="#FFD15C"
      />
      <path
        d="M7.32275 20.8277V18.7637H9.19427V20.8251L8.25875 20.0387L7.32275 20.8277Z"
        fill="#F2F2F2"
      />
      <path
        d="M18.7357 18.7632H12.7157V24.0002H18.7357V18.7632Z"
        fill="#FFD15C"
      />
      <path
        d="M14.7877 20.8277V18.7637H16.6592V20.8251L15.7237 20.0387L14.7877 20.8277Z"
        fill="#F2F2F2"
      />
      <path
        d="M15.0028 13.5249H8.98279V18.7619H15.0028V13.5249Z"
        fill="#F8B64C"
      />
      <path
        d="M11.0547 15.5904V13.5264H12.9267V15.5879L11.9907 14.8014L11.0547 15.5904Z"
        fill="#F2F2F2"
      />
      <path
        d="M22.2872 7.24316V24.0001H20.2332V10.5786H3.75027V24.0001H1.6958V7.24316H22.2872Z"
        fill="#666666"
      />
      <path
        d="M22.2907 7.24316H1.6958V8.54966H22.2907V7.24316Z"
        fill="#E8EAEA"
      />
      <path
        d="M0.385398 6.09459L11.6593 0.0851128C11.8723 -0.0283709 12.1279 -0.0283709 12.3409 0.0851128L23.6153 6.09459C24.2808 6.44958 24.0288 7.4586 23.2738 7.4586H0.725896C-0.0286001 7.45855 -0.280599 6.44958 0.385398 6.09459Z"
        fill="#FF7058"
      />
    </MuiSvgIcon>
  );
};

export default Warehouse;
