import MainLeftComponent from "./MainLeftComponent";
import MainRightComponent from "./MainRightComponent";


const MainComponent = () => {

    // const [ad, setAd] = useState<boolean>(false);

    return (
        <section className="main-content">
            <div className="container-xl">

                <div className="row gy-4">
                    <MainLeftComponent />
                    <MainRightComponent />
                </div>
            </div>
        </section>
    )
};

export default MainComponent;

// import { useState } from "react";
// import AdBannaer from "./AdBannaer";
// import AdContent from "./AdContent/inde";

        // <div className="blog_main_wrapper" >

        //     {/* {ad && <AdBannaer />} */}
        //     {/* <AdBannaer /> */}
        //     <div className="blog_main_wrapper blog_toppadder60 blog_bottompadder60">
        //         <div className="container">
        //             <div className="row">

        //                 <MainContent />

        //                 <AdContent />
        //             </div>
        //         </div>
        //     </div>
        // </div>


