import PixelTransition from '../components/PixelTransition/PixelTransition';
import { Factory } from 'lucide-react'

const Profile = () => {
    return (
        <section id="profile" className='flex items-center justify-around m-3'>
            <PixelTransition
                firstContent={
                    <img
                        src="/hari1.png"
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>H</p>
                        <Factory size={36} />
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
            <PixelTransition
                firstContent={
                    <img
                        src="/hari.png"
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>A</p>
                        <img
                            src="/icon2.png"
                            alt="icon after A"
                            style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                        />
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
            <PixelTransition
                firstContent={
                    <img
                        src="/hari2.png"
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>R</p>
                        <img
                            src="/icon3.png"
                            alt="icon after R"
                            style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                        />
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
            <PixelTransition
                firstContent={
                    <img
                        src="/hari3.png"
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>I</p>
                        <img
                            src="/icon4.png"
                            alt="icon after I"
                            style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                        />
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
        </section>
    );
}

export default Profile;
