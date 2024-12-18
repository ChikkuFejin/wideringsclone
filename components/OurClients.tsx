import ScrollToShow from "./sub/ScrollToShow";
import StoryTittle from "./sub/StoryTittle";

export default function OurClients() {
    return(
        <section className="mt-[60px]  container">
            <StoryTittle title='Our Clients'/>
            <div className="mt-[100px]">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-between">
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1" className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>

                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                    <ScrollToShow index={1}>
                        <img src="/assets/images/clients/BASF-Logo.png" alt="client1"  className="w-[40%] mb-[50px]"/>
                    </ScrollToShow>
                   
                </div>
            </div>
        </section>
    )
}