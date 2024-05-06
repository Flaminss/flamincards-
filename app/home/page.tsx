import Image from "next/image";
import { Button } from "@nextui-org/button";
import ForeverMobileScreen from "../ForeverMobileScreen";
import TopNavbar from "../TopNavbar";
import AccountOverview from "../AccountOverview";
import BottomNavbar from "../BottomNavbar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <main className="light">
        
        <section className="pt-4 pb-20 px-4">
          <AccountOverview />
        </section>

        <section>
          <h2>Quick Actions</h2>
          <div>
            <ul>
              <li>
                <button>Redeem Giftcard</button>
              </li>
              <li>
                <button>Upload Music</button>
              </li>
              <li>
                <button>Download Beats</button>
              </li>
              <li>
                <button>Support & Donate</button>
              </li>
            </ul>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
