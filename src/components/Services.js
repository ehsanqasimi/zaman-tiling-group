import Service from './Service';

function Services() {
    return (
        <section id="services" className="services animate__animated">
            <h3 className="services-header">What we offer</h3>
            <div className="servicesContainer">
                <Service
                    serviceName="Bathroom Renovation"
                    serviceDesc="Transform your bathroom into a haven of luxury and comfort through our comprehensive renovation services, combining functionality with elegant design."
                    bgImage="https://cdn.habitusliving.com/wp-content/uploads/2024/02/1.renocostFEAT.jpg" // 👈 relative path or URL
                />
                <Service
                    serviceName="Water Proofing"
                    serviceDesc="Ensure lasting protection with our advanced waterproofing solutions, guarding your spaces against moisture and water damage."
                    bgImage="https://constructionchemicals.com.au/wp-content/uploads/2021/03/waterproofing-membranes-1.jpg"
                />
                <Service
                    serviceName="Tiling"
                    serviceDesc="From floors to walls, we deliver precise tiling with durable materials and clean finishes for homes and businesses."
                    bgImage="https://cdn.shopify.com/s/files/1/0518/0601/1582/files/Tiling_a_floor.jpg?v=1667837188"
                />
                <Service
                    serviceName="Kitchen Splash Back"
                    serviceDesc="Elevate your kitchen with stylish and easy-to-clean splash backs professionally measured and installed."
                    bgImage="https://images.squarespace-cdn.com/content/v1/6465e9f0c32fb30720d59d36/1685670239103-CKT4G928V0Y4N2V6ONLH/painted-glass-kitchen-backsplash-zephyr-and-stone.jpg"
                />
            </div>
        </section>
    );
}

export default Services;