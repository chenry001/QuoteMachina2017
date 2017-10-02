var mostRecent = -1; // intialize, tracks most recent quote displayed
var quotes = [
    {
        "id": 0,
        "person": "Democritus of Abdera",
        "text": "I would rather understand one cause than be King of Persia.",
        "source": "Quoted in Cosmos, by Carl Sagan, p. 167",
        "recommended": "A Brief History of Time, by Stephen Hawking", // maybe use an array and display from that...
        "year": 1980
    },
    {
        "id": 1,
        "person": "Shinto Revere",
        "text": "Mad waves devour the rocks. I ask myself in the darkness, \"Have I become a god?\" Dim is the night and wild!",
        "source": "Quoted in In Ghostly Japan, by Lafcadio Hearn, p. 161",
        "recommended": "BUSHIDO: The Soul of Japan, by Inazo Nitobe",
        "year": "1971 (Hearn)"
    },
    {
        "id": 2,
        "person": "Richard Wagner",
        "text": "And could he discover the ring, it would make him the lord of the world!.",
        "source": "Siegfried, Act III, Quoted in Tolkien: A Look Behind The Lord of the Rings, by Lin Carter, p. 152",
        "recommended": "Tolkien, et al.",
        "year": "1871 final revision, 1876 performance premiere with Wagnar's complete Ring Cycle"
    },
    {
        "id": 3,
        "person": "Wolfram von Eschenbach",
        "text": "The Graal. . . is a weight so heavy that creatures in the bondage of sin are unable to move it from its place.",
        "source": "Parsival, IX, 477, quoted in Foucalt's Pendulum, by Umberto Eco, p. 126.",
        "recommended": "The Name of the Rose (Eco)", // maybe use an array and display from that...
        "year": "13th Century (Parsival)"
    },
    {
        "id": 4,
        "person": "Attributed to Aristotle",
        "text": "Our wonder is excited, firstly, by phenomena which occur in accordance with nature but of which we do not know the cause, and secondly by those which are produced by art despite nature.",
        "source": "Mechanika (Mechanics), quoted in The Ancient Engineers, by L. Sprague De Camp, p. 121.",
        "recommended": "The Complete Compleat Enchanter (De Camp)",
        "year": "About fourth century B.C. (Mechanika)"
    },
    {
        "id": 5,
        "person": "Rumi",
        "text": "I have lived on the lip<br>of insanity, wanting to know reasons,<br>knocking on a door. It opens.<br>I've been knocking from the inside!",
        "source": "The Enlightened Heart, Edited by Stephen Mitchell, p. 55.",
        "recommended": "The Selected Poetry of Rainer Maria Rilke (Mitchell).",
        "year": "13th Century (Rumi)"
    },
    {
        "id": 6,
        "person": "Lao-tzu",
        "text": "The Master arrives without leaving,<br>sees the light without looking,<br>achieves without doing a thing.",
        "source": "From Chapter 47 of the Tao Te Ching, translated by Stephen Mitchell",
        "recommended": "The Selected Poetry of Rainer Maria Rilke (Mitchell).", // maybe use an array and display from that...
        "year": "Possibly 4th through 6th Centerury B.C.E. (Lao-tzu) if not legendary. Traditionally Lao-tzu has been considered to be a contemporary of Confucius."
    },
    {
        "id": 7,
        "person": "R. Buckminster Fuller",
        "text": "I learned very early and painfully that you have to decide at the outset whether you are trying to make money or to make sense, as they are mutually exclusive.",
        "source": "From the Foreward, Grunch of Giants, p. IV",
        "recommended": "Tetrascroll: A Cosmic Fairy Tail (Fuller)",
        "year": 1983
    },
    {
        "id": 8,
        "person": "Adolf Wolfli",
        "text": "And that which is not, May it soon be. Ha, ha, ha. How would you, kind reader, like to stage with me a majestic voyage, as far as or to the very farthest heavenly bodies in the realm of The Divine Universe: So kindly accompany me by ship, vehicle and railway, to the gigantic God-Fatther-Heaven Island, in the southern part of the immense, almost endless, Great-East-Sea. Ha, ha, ha.",
        "source": "Excerpt from Geographic and Algebraic Books, quoted in \"Adolf Wolfli, Spatiality and the Sublime\", in Adolf Wolfli: Draftsman, Writer, Poet, Composer, p. 136",
        "recommended": "None available",
        "year": "1912-1916 (Geographic and Algebraic Books)"
    }];

console.log("end of quote-data.js");