/* eslint-disable react/prop-types */
export const Feature = ({ icon, title, text }) => {
    return (
        <div className="feature-item">
            <img src={icon} alt={title} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )

}