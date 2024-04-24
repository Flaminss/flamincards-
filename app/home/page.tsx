import { TopNavbar } from "../components/TopNavbar";
import AccountOverview from "../components/account-overview";

export default function HomePage() {
  return (
    <div className="max-w-sm mx-auto">
      <TopNavbar />
      <section className="pt-8 pb-20">
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

      <section>
        
      </section>
    </div>
  );
}
