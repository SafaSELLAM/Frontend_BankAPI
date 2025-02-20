import { AccountContent } from "./AccountContent.jsx";

export const Account = ({ title, amount, description }) => {
    return (
        <section className="account">
            <AccountContent title={title} amount={amount} description={description} />
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};
