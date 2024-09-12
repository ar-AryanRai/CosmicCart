const data = [
  {
    id: 1,
    name: "Mercury",
    content: `Mercury, the closest planet to the Sun, is the smallest in our solar system. It has a diameter of about 4,880
        kilometers and is slightly larger than Earth's moon. Mercury's proximity to the Sun causes extreme temperature
        fluctuations, ranging from 430°C during the day to -180°C at night. Its surface is covered with craters, much
        like
        the Moon, and it lacks a significant atmosphere to retain heat or protect it from meteoroid impacts.
        <br>
        Mercury has an exceptionally fast orbit, completing a revolution around the Sun in just 88 Earth days, but its
        rotation is slow, taking 59 Earth days to complete one spin on its axis. This creates a day-night cycle much
        longer than Earth's. Despite being so close to the Sun, Mercury isn't the hottest planet—Venus holds that title
        due to its thick atmosphere. Mercury is challenging to observe from Earth, but space missions like MESSENGER
        have provided detailed insights.`,
    image: "../images/mercury.png",
    oprice: 76934,
    price: 69987,
    diff: 6947,
    off: "9.03%",
  },
  {
    id: 2,
    name: "Venus",
    content: `Venus, the second planet from the Sun, is often called Earth's twin due to its similar size and composition, but its environment is drastically different. It has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid, creating a runaway greenhouse effect. This results in surface temperatures that can reach up to 465°C (869°F), making Venus the hottest planet in the solar system, even hotter than Mercury. Its surface is dotted with volcanoes, mountains, and vast plains, but it remains mostly hidden beneath the dense cloud cover. 
    <br>
    Venus rotates very slowly on its axis, taking about 243 Earth days to complete one rotation, and it rotates in the opposite direction to most planets. Despite its hostile conditions, Venus has been a subject of fascination for scientists studying the possibility of past oceans and the planet's evolution over time. It shines brightly in our sky, known as the "Morning Star" or "Evening Star."`,
    image: "../images/venus.png",
    oprice: 62587,
    price: 56987,
    diff: 5600,
    off: "8.94%",
  },
  {
    id: 3,
    name: "Earth",
    content: `Earth is the third planet from the Sun and the only known place in the universe to support life. It has a diverse environment with a wide range of ecosystems, from deserts to lush rainforests, and vast oceans that cover about 71% of its surface. Earth has a moderate climate, thanks to its atmosphere, which consists mainly of nitrogen and oxygen, protecting the planet from harmful solar radiation and maintaining a suitable temperature for life.
    <br>
    The planet’s geology is dynamic, with tectonic plates causing earthquakes and volcanic activity. Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers) and completes one orbit in 365.25 days, resulting in the year. Its axial tilt gives rise to seasons, while the gravitational pull of the Moon influences tides. Earth's biodiversity, along with its capacity to maintain water in liquid form, makes it unique among the known planets in our solar system.`,
    image: "../images/earth.png",
    oprice: 145982,
    price: 135987,
    diff: 9995,
    off: "6.85%",
  },
  {
    id: 4,
    name: "Mars",
    content: `Mars, the fourth planet from the Sun, is often called the "Red Planet" due to its reddish appearance caused by iron oxide (rust) on its surface. Slightly more than half the size of Earth, Mars has a thin atmosphere composed primarily of carbon dioxide. It experiences seasons like Earth because of its similar axial tilt, but they last longer due to its extended orbit around the Sun. The planet's surface features vast deserts, valleys, and the largest volcano in the solar system, Olympus Mons. Scientists believe Mars once had liquid water, as evidenced by dried-up riverbeds and polar ice caps. Its two small moons, Phobos and Deimos, are irregularly shaped and likely captured asteroids. Mars has been a focal point for exploration due to its potential to have supported life in the past, and it continues to be a target for future human exploration missions.`,
    image: "../images/mars.png",
    oprice: 72787,
    price: 61787,
    diff: 11000,
    off: "15.11%",
  },
  {
    id: 5,
    name: "Jupiter",
    content: `Jupiter, the largest planet in our solar system, is a gas giant renowned for its massive size and striking appearance. With a diameter of about 86,881 miles (139,822 kilometers), it is more than 11 times wider than Earth. Jupiter's atmosphere is predominantly composed of hydrogen and helium, and it's known for its prominent bands of clouds, which create its distinctive striped appearance. One of its most famous features is the Great Red Spot, a colossal storm that has been raging for at least 400 years. 
    <br>
    Jupiter has a strong magnetic field and a complex system of rings and moons, with 79 known moons including the four largest, called the Galilean moons: Io, Europa, Ganymede, and Callisto. Its immense gravity and size play a crucial role in shaping the dynamics of the solar system, acting as a cosmic shield by capturing or deflecting potential impactors.`,
    image: "../images/jupiter.png",
    oprice: 119387,
    price: 109987,
    diff: 9400,
    off: "7.87%",
  },
  {
    id: 6,
    name: "Saturn",
    content: `Saturn, the sixth planet from the Sun, is renowned for its stunning ring system, which is the most elaborate and extensive among the planets in our solar system. With a diameter of about 120,000 kilometers, Saturn is the second-largest planet after Jupiter. It is a gas giant, composed primarily of hydrogen and helium, and has a low density, meaning it would float if placed in a sufficiently large body of water. 
    <br>
    Saturn's rings are made up of ice particles, rocky debris, and dust, ranging in size from tiny grains to large chunks. The planet has a diverse atmosphere with strong winds and frequent storms, including the famous hexagonal storm at its north pole. Saturn also has more than 80 moons, including Titan, the second-largest moon in the solar system, which has a thick atmosphere and potential for liquid lakes and seas.`,
    image: "../images/saturn.jpg",
    oprice: 93687,
    price: 91987,
    diff: 1700,
    off: "1.81%",
  },
  {
    id: 7,
    name: "Uranus",
    content: `Uranus, the seventh planet from the Sun, is a unique giant in our solar system. Distinguished by its striking blue-green hue, Uranus is primarily composed of hydrogen and helium, with traces of methane that give it its color. It is an ice giant, characterized by a large icy component compared to the gas giants Jupiter and Saturn. Uranus has a distinctive axial tilt of about 98 degrees, making it the only planet that rotates on its side. This tilt results in extreme seasonal variations. The planet's ring system, though faint, consists of thirteen known rings. Uranus has 27 known moons, with Miranda, Ariel, Umbriel, Titania, and Oberon being the largest. Discovered by William Herschel in 1781, Uranus was the first planet discovered with a telescope. Its distant orbit and unusual rotation make it a subject of continued interest and study in planetary science.`,
    image: "../images/uranus.png",
    oprice: 43987,
    price: 42987,
    diff: 1000,
    off: "2.27%",
  },
  {
    id: 8,
    name: "Neptune",
    content: `Neptune, the eighth planet from the Sun, is renowned for its striking blue hue, a result of methane in its atmosphere absorbing red light and reflecting blue. Discovered in 1846 by astronomers Johann Galle and Heinrich d'Arrest, Neptune is the third most massive and densest gas giant in our solar system. With a diameter of about 49,244 kilometers, it is roughly 4 times larger than Earth. 
    <br>
    Neptune's atmosphere is composed mainly of hydrogen, helium, and methane, with dynamic weather patterns including the fastest winds in the solar system, reaching up to 2,100 kilometers per hour. The planet has 14 known moons, with Triton being the largest and unique for its retrograde orbit. Neptune's faint rings are primarily composed of ice particles and dust. Despite its distant and cold environment, Neptune remains a subject of intense scientific interest and exploration.`,
    image: "../images/neptune.png",
    oprice: 113689,
    price: 111987,
    diff: 1702,
    off: "1.49%",
  },
];
