import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="logo" href="/">
              brandid<b>pool</b>
            </Link>
            <p>Identity and business services in one place.</p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#">Identity</a>
            <a href="#">Business registration</a>
            <a href="#">Tax and compliance</a>
            <a href="#">Global business ID</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#faq">FAQs</a>
            <a href="#">Track an application</a>
            <a href="#contact">Contact us</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Refund policy</a>
          </div>
        </div>
        <div className="fbase">
          <span>© 2026 Branded Pool Technologies Ltd. All rights reserved.</span>
          <span>X · Facebook · Instagram</span>
        </div>
      </div>
    </footer>
  );
}
