import { Moon, Sparkles, Cloud } from "lucide-react";
import { motion } from "framer-motion";

function Story() {
  const scenes = [
    {
      number: "01",
      icon: Moon,
      title: "The nursery goes quiet.",
      text: "When the neighborhood falls asleep, the Midnight Nursery comes alive. Pip wakes beneath a sky full of tiny stars, ready for another night of dream work.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "A dream begins as a spark.",
      text: "Pip carefully mixes a little imagination, a gentle lullaby, and a pinch of moonlight. Every dream is designed for someone who needs a little extra magic tonight.",
    },
    {
      number: "03",
      icon: Cloud,
      title: "Delivery before bedtime.",
      text: "Once a dream is ready, Pip sends it across the rooftops on a soft cloud. By morning, another sleepy creature wakes up with a wonderful story to remember.",
    },
  ];

  return (
    <section className="story-section" id="story">
      <div className="story-heading">
        <p className="section-eyebrow">PIP'S BEDTIME JOURNEY</p>

        <h2>How a dream gets delivered.</h2>

        <p>
          Follow Pip through one ordinary night at the Midnight Nursery.
        </p>
      </div>

      <div className="story-scenes">
        {scenes.map((scene) => {
          const Icon = scene.icon;

          return (
            <motion.article
              className="story-scene"
              key={scene.number}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="story-number">{scene.number}</div>

              <div className="story-icon">
                <Icon size={42} strokeWidth={1.5} />
              </div>

              <div className="story-content">
                <h3>{scene.title}</h3>

                <p>{scene.text}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Story;