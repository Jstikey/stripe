import phone from "../src/assets/images/phone.svg";
import { useAppContext } from "../src/appContext";

export const Hero = () => {
  //
  const context = useAppContext();
  const { closeSubMenu } = context || {};
  //
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payments infrastructure for the internet</h1>
          <p>
            millions of companies of all sizes-from startups to fortune 500s-use
            Strpes softwares and APIs to accept, send payouts, and manage their
            business online
          </p>
          <button>start now</button>
        </article>
        <article className="hero-image">
          <img src={phone} alt="hello" />
        </article>
      </div>
    </section>
  );
};
