import React from "react"
import TextArea from "./TextArea"

function Strategy() {
    return (
        <div className="strategy">
            <TextArea
                title="OUR STRATEGY"
                description="Introducing this interface for those people in need of food who are in contact with various NGOs or as much as the NGO can donate further."
                color="#"
                className="strategy-text"
            />
            <TextArea
                title="SUPPORT MORE FAMILIES"
                description="Through this many people will have a helping hand as we are all aware of the food pandemic this entire nation goes through."
                color="#"
                className="strategy-text"
            />
            <TextArea
                title="EXTEND OUR SERVICE"
                description="Increase the number of families receiving our high-quality service by expanding capacity in existing teams and food wastage can also be taken into account by our service as all those gatherings that excess food can be put to actual use."
                color="#"
                className="strategy-text"
            />
            <TextArea
                title="INCREASE OUR PROFILE"
                description="Increase the profile of FoodHope, leading to increased public awareness about the issues of hunger and food wastage by developing links with other organisations."
                color="#"
                className="strategy-text"
            />
            <TextArea
                title="CONTINUED GROWTH"
                description="Continue to ensure that marketing and fundraising activities effectively deliver income and raise our profile."
                color="#"
                className="strategy-text"
            />
        </div>
    )
}

export default Strategy