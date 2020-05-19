import * as React from "react";
import { ISiteBreadcrumbProps } from "./ISiteBreadcrumb";
import styles from './SiteBreadcrumb.module.scss';
import { ClientType, getClientType } from "./ClientType";

export default class SiteBreadcrumb extends React.Component<ISiteBreadcrumbProps, {}> { 

  constructor(props: ISiteBreadcrumbProps) {
    super(props);
  }

  public render(): React.ReactElement<ISiteBreadcrumbProps> {
    // get Client Type
    const clientType: ClientType = getClientType();

    // delaware
    if (
      window.location.href === "https://delawareconsulting.sharepoint.com/sites/crisismanagement" ||
      window.location.href === "https://delawareconsulting.sharepoint.com/sites/crisismanagement/" ||
      window.location.href.indexOf("sitepages/home.aspx") > -1 ||
      window.location.href.indexOf("/Yammer-Community-on-Corona.aspx") > -1 ||
      clientType === ClientType.SharePointMobileApp      
    ) { return <div className={styles.empty}></div>; }
          

    return (
      <div className={styles.breadcrumb} >
        <a onClick={() => window.history.back()}>{" < Back"}</a>
      </div >
    );

    // sibelga
    // if (
    //   window.location.href === "https://sibelga.sharepoint.com/sites/corona-at-sibelga-nl/SitePages/Language-Select.aspx" ||
    //   window.location.href.indexOf("/SitePages/Language-Select.aspx") > -1
    // ) { return <div></div>; }
    
    // const hasSuiteBar = document.getElementById("SuiteNavPlaceHolder").childElementCount !== 0;
      
    // return (
    //   <div className={styles.breadcrumb} >
    //     {!hasSuiteBar && (
    //         <span>
    //           <a onClick={() => window.history.back()}>{"Back"}</a>{" | "}          
    //         </span>
    //       )
    //     }
    //     <a onClick={() => window.location.href = "https://sibelga.sharepoint.com/sites/corona-at-sibelga-nl/SitePages/Language-Select.aspx"}>{"Change language"}</a>
    //   </div >
    // );
  }  
}
