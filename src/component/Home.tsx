import { useState } from 'react';
function Home() {

    const [step, setStep] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");
    const [food, setFood] = useState("");
    const [noPos, setNoPos] = useState({
        top: 300,
        left: 320
    });
    const places = [
        {
            name: "Pizza Date 🍕",
            img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
        },
        {
            name: "Coffee Date ☕",
            img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
        },
        {
            name: "Movie Night 🎬",
            img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
        },
        {
            name: "Beach Walk 🌊",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"
        },
        {
            name: "Fancy Dinner 🍽️",
            img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500"
        },
        {
            name: "Sunset Point 🌄",
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
        }
    ];

    const foods = [
        "Pizza 🍕",
        "Burger 🍔",
        "Pasta 🍝",
        "Ice Cream 🍨",
        "Momos 🥟",
        "Sandwich 🥪"
    ];
    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#ff9a9e,#fad0c4,#fbc2eb)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "450px",
                    background: "white",
                    borderRadius: "25px",
                    padding: "25px",
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,.2)",
                    position: "relative"
                }}
            >
                {/* PAGE 1 */}
                {step === 1 && (
                    <>
                        <div style={{ fontSize: "70px" }}>
                            ❤️🥰❤️
                        </div>

                        <h1
                            style={{
                                color: "#ff006e"
                            }}
                        >
                            Hey Pooja 💖
                        </h1>

                        <h3>
                            Will you go on a Date with me?
                        </h3>

                        <p>
                            You are my favourite person in
                            the whole world ❤️
                        </p>

                        <button
                            onClick={() => setStep(2)}
                            style={{
                                background: "#06d6a0",
                                color: "white",
                                border: "none",
                                padding: "10px 30px",
                                borderRadius: "12px",
                                fontSize: "18px",
                                marginTop: "20px",
                                cursor: "pointer"
                            }}
                        >
                            YES 💕
                        </button>

                        <button
                            onMouseEnter={() =>
                                setNoPos({
                                    top:
                                        Math.random() * 250 + 50,
                                    left:
                                        Math.random() * 220
                                })
                            }
                            style={{
                                position: "absolute",
                                top: noPos.top,
                                left: noPos.left,
                                background: "#ef476f",
                                color: "white",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }}
                        >
                            NO 😜
                        </button>
                    </>
                )}

                {/* PAGE 2 */}
                {step === 2 && (
                    <>
                        <h1>🥹💖</h1>

                        <h2>OMG Pooja Said YES!</h2>

                        <h3>Select Date 📅</h3>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) =>
                                setDate(e.target.value)
                            }
                            style={{
                                width: "95%",
                                padding: "12px",
                                marginBottom: "15px",
                                borderRadius: "10px"
                            }}
                        />

                        <h3>Select Time ⏰</h3>

                        <select
                            value={time}
                            onChange={(e) =>
                                setTime(e.target.value)
                            }
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "10px"
                            }}
                        >
                            <option value="">
                                Select Time
                            </option>
                            <option>8:00 AM</option>
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>4:00 PM</option>
                            <option>5:00 PM</option>
                            <option>6:00 PM</option>
                            <option>7:00 PM</option>
                        </select>

                        <button
                            onClick={() => setStep(3)}
                            style={{
                                marginTop: "20px",
                                background: "#ff006e",
                                color: "white",
                                border: "none",
                                padding: "12px 30px",
                                borderRadius: "10px"
                            }}
                        >
                            Next ❤️
                        </button>
                    </>
                )}

                {/* PAGE 3 */}
                {step === 3 && (
                    <>
                        <h2>
                            Where should we go? 🌹
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "1fr 1fr",
                                gap: "10px"
                            }}
                        >
                            {places.map((p) => (
                                <div
                                    key={p.name}
                                    onClick={() => {
                                        setPlace(p.name);
                                        setStep(4);
                                    }}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "15px",
                                        overflow: "hidden",
                                        boxShadow:
                                            "0 4px 10px rgba(0,0,0,.15)"
                                    }}
                                >
                                    <img
                                        src={p.img}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "120px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <div
                                        style={{
                                            padding: "10px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {p.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* PAGE 4 */}
                {step === 4 && (
                    <>
                        <h2>
                            What should we eat? 😋
                        </h2>

                        {foods.map((f) => (
                            <button
                                key={f}
                                onClick={() => {
                                    setFood(f);
                                    setStep(5);
                                }}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    marginBottom: "10px",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    border: "none",
                                    background: "#ffd166"
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </>
                )}

                {/* PAGE 5 */}
                {step === 5 && (
                    <>
                        <div
                            style={{
                                fontSize: "80px"
                            }}
                        >
                            💖🌹💖
                        </div>

                        <h1
                            style={{
                                color: "#ff006e"
                            }}
                        >
                            Date Confirmed ❤️
                        </h1>

                        <h2>Pooja + Darshak 🥰</h2>

                        <p>
                            📅 <b>{date}</b>
                        </p>

                        <p>
                            ⏰ <b>{time}</b>
                        </p>

                        <p>
                            📍 <b>{place}</b>
                        </p>

                        <p>
                            🍕 <b>{food}</b>
                        </p>

                        <h3
                            style={{
                                color: "#ff006e"
                            }}
                        >
                            I can't wait to see you ❤️
                        </h3>

                        <div
                            style={{
                                fontSize: "40px"
                            }}
                        >
                            🥰💕🌹💖
                        </div>
                    </>
                )}
            </div>
        </div>

    );

}
export default Home;