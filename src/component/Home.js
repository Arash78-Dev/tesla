import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            right="CUSTOM ORDER"
            left="EXISTING INVENTORY"
            bgImg="model-s.jpg"
            arrow='yes'
            />
            <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            right="CUSTOM ORDER"
            left="EXISTING INVENTORY"
            bgImg="model-y.jpg"
            />
            <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            right="CUSTOM ORDER"
            left="EXISTING INVENTORY"
            bgImg="model-3.jpg"
            />
            <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            right="CUSTOM ORDER"
            left="EXISTING INVENTORY"
            bgImg="model-x.jpg"
            />
            <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            right="ORDER NOW"
            left="learn more"
            bgImg="solar-panel.jpg"
            />
            <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            right="ORDER NOW"
            left="learn more"
            bgImg="solar-roof.jpg"
            />
            <Section
            title="Accessories"
            right="Shop now"
            bgImg="accessories.jpg"
            />
        </div>
    )
}

export default Home
