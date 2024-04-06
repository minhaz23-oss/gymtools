import Image from "next/image";
import Link from 'next/link';
const page = () => {
  return (
    <main>
      <h1 className="gradient-text font-black text-[30px] md:text-[40px] uppercase leading-none mt-7 text-center">
        here you can find best blogs about gym tools and their uses , benefits
        and many more
      </h1>
      <section className="w-full mt-20">
        <h1 className="gradient-text font-black uppercase text-[25px]">
          1. dumbbells
        </h1>
        <div className=" mt-5">
          <div className=" w-[180px] md:max-w-[300px] mr-2 sm:mr-6 float-left ">
            <Image
              src="/product1.jpg"
              width={0}
              height={0}
              className="rounded-[8px] w-[100px] h-[100px] "
              alt="dumbbell"
              layout="responsive"
            />
            <Link href='https://a.co/d/65BuMKQ' className="btn-secondary py-2 text-[18px] font-bold mt-3 w-full flex flex-center">
              Buy it from Amazon
            </Link>
          </div>

          <p className=" text-[14px] sm:text-[16px] text-silver">
            The gym can feel intimidating, filled with complex machines and
            seasoned weightlifters. But there's one friendly tool for beginners
            and veterans alike: the humble dumbbell. Forget bulky equipment;
            dumbbells offer a full-body workout you can do anywhere, anytime.
            Most of the time we don’t like the environment of gym . So it is a
            great choice to set up a gym environment in home . In this case
            Dumbbells can be your best equipment .
          </p>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            Benefits of Dumbbells :
          </h1>
          <p className=" text-[16px] text-silver">
            Discover the numerous benefits of incorporating dumbbell exercises
            into your workout routine. From increased muscle engagement and
            improved balance to enhanced range of motion and functional
            strength, dumbbells offer unparalleled versatility and effectiveness
            for achieving your fitness goals. However the benefits of Dumbbells
            are many, its easy to use capabilities makes it a perfect choice for
            the beginner . However below we are providing some of the key
            benefits of Dumbbells:
          </p>
          <br />
          <ul>
            <li className="lists">
              <span className=" font-black">Build Strength & Muscle:</span>{" "}
              Dumbbell exercises stimulate muscle growth and increase overall
              strength.
            </li>
            <li className="lists">
              <span className=" font-black">Boost Coordination & Balance:</span>
              Dumbbell movements improve coordination and balance, essential for
              everyday life.
            </li>
            <li className="lists">
              <span className=" font-black">Strong Bones:</span> Weight training
              with dumbbells can help maintain bone density, keeping you strong
              as you age.
            </li>
            <li className="lists">
              <span className=" font-black">Burn More Calories:</span> Building
              muscle slightly increases your resting metabolic rate, leading to
              more calorie burning.
            </li>
            <li className="lists">
              <span className=" font-black">Build Strength & Muscle:</span>{" "}
              Dumbbell workouts are convenient and flexible, fitting seamlessly
              into your busy schedule.
            </li>
          </ul>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            {" "}
            Getting Started with Dumbbells :
          </h1>
          <p className=" text-[16px] text-silver">
            Whether you're a beginner or a seasoned lifter, mastering the basics
            of dumbbell training is essential for maximizing results and
            minimizing the risk of injury. Explore fundamental exercises such as
            dumbbell presses, rows, squats, and curls, along with tips for
            proper form and technique.
          </p>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            Below we are providing some easy to do workout with dumbbells :
          </h1>
          <ul>
            <li className="lists">
              <span className=" font-black">Bicep Curls:</span> Hold a dumbbell
              in each hand, palms facing forward. Curl the weights towards your
              shoulders, squeezing your biceps at the top. Slowly lower back
              down. (Targets biceps)
            </li>
            <li className="lists">
              <span className=" font-black">Overhead Press:</span> Hold
              dumbbells at shoulder level, palms facing forward. Press the
              weights directly overhead until your arms are straight. Lower back
              down with control. (Targets shoulders and triceps)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Rows:</span> Hinge at your
              hips with your back straight and knees slightly bent. Hold
              dumbbells with palms facing each other and row them towards your
              chest, squeezing your shoulder blades. Lower back down slowly.
              (Targets back muscles)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Squats:</span> Hold
              dumbbells at shoulder level, palms facing each other. Stand with
              your feet shoulder-width apart and squat down as if sitting in a
              chair. Keep your core engaged and back straight. Push through your
              heels to stand back up. (Targets legs and core)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Lunges: </span> Hold
              dumbbells at your sides. Step forward with one leg, lowering your
              body until both knees are bent at 90-degree angles. Push back up
              through your front heel to return to the starting position. Repeat
              with the other leg. (Targets legs and core)
            </li>
            <li className="lists">
              <span className=" font-black"> Dumbbell Deadlifts:</span> Stand
              with dumbbells on the floor in front of you, palms facing each
              other. Hinge at your hips and knees to lower the dumbbells towards
              the ground, keeping your back straight. Maintain a slight arch in
              your lower back and avoid rounding your spine. Stand back up to
              starting position, squeezing your glutes. (Targets hamstrings,
              glutes, and core)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Floor Press:</span> Lie on
              your back with your knees bent and feet flat on the floor. Hold
              dumbbells at shoulder level, palms facing forward. Press the
              weights straight up until your arms are extended. Lower back down
              with control. (Targets chest and triceps)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Chest Flyes:</span> Lie on
              your back with your knees bent and feet flat on the floor. Hold
              dumbbells with palms facing each other overhead. Slowly lower the
              dumbbells out to the sides, maintaining a slight bend in your
              elbows. Bring the weights back together in a hugging motion at the
              top. (Targets chest)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Romanian Deadlifts:</span>
              Hold dumbbells at your sides. Stand with your feet shoulder-width
              apart and squat down, pushing your hips back and keeping your back
              straight. Lower the weights down your legs as far as comfortably
              possible without rounding your back. Stand back up to starting
              position, squeezing your glutes. (Targets hamstrings and glutes)
            </li>
            <li className="lists">
              <span className=" font-black">Dumbbell Calf Raises:</span> Stand
              with dumbbells in your hands, feet shoulder-width apart. Rise up
              onto your toes, squeezing your calves at the top. Slowly lower
              back down to the starting position. (Targets calves)
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full mt-20">
        <h1 className="gradient-text font-black uppercase text-[25px]">
          2. competition kettlebell
        </h1>
        <div className=" mt-5">
        <div className=" w-[180px] md:max-w-[300px] mr-2 sm:mr-6 float-left ">
            <Image
              src="/product3.jpg"
              width={300}
              height={300}
              className="rounded-[8px] "
              alt="dumbbell"
            />
            <Link href='https://a.co/d/a8FYChT' className="btn-secondary py-2 text-[18px] font-bold mt-3 w-full flex flex-center">
              Buy it from Amazon
            </Link>
          </div>

          <p className=" text-[14px] text-silver">
            Gym environments can often feel daunting, but fear not! use the
            competition kettlebell, a versatile tool that's perfect for
            beginners and seasoned fitness enthusiasts alike. Say goodbye to
            bulky equipment and hello to the convenience of a full-body workout,
            anytime, anywhere. Setting up a gym environment at home has never
            been easier, and competition kettlebells can be your go-to
            equipment.
          </p>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            Benefits of competition kettlebell :
          </h1>
          <p className=" text-[16px] text-silver">
            Discover the myriad benefits of incorporating competition kettlebell
            exercises into your workout routine. From increased muscle
            engagement and enhanced balance to improved range of motion and
            functional strength, competition kettlebells offer unparalleled
            versatility and effectiveness for achieving your fitness goals.
            Their user-friendly design makes them perfect for beginners while
            still challenging seasoned athletes. However below we are providing
            some of the key benefits of competition kettlebell:
          </p>
          <br />
          <ul>
            <li className="lists">
              <span className=" font-black">
                Build a Body Like a Superhero:{" "}
              </span>
              Ditch the boring weights. Kettlebell swings, cleans, and snatches
              will sculpt you from head to toe, making you feel like a total
              badass.
            </li>
            <li className="lists">
              <span className=" font-black"> Become a Ninja Master: </span>{" "}
              Unleash your inner ninja with kettlebell exercises that improve
              your coordination and balance. Dodge everyday obstacles like a pro
              - no more tripping over air!
            </li>
            <li className="lists">
              <span className=" font-black">Forge Iron Bones: </span> Forget
              that frail feeling. Kettlebells help you build strong bones,
              ensuring you can crush your fitness goals for years to come.
            </li>
            <li className="lists">
              <span className=" font-black">Burn Calories Like a Dragon:</span>
              Building muscle is like adding a calorie-burning furnace to your
              body. Kettlebells will torch fat and leave you feeling energized
              all day long.
            </li>
            <li className="lists">
              <span className=" font-black">
                {" "}
                Workouts That Fit Your Life, Not the Other Way Around:{" "}
              </span>{" "}
              No gym? No problem! Kettlebells are your portable powerhouse for
              quick and effective workouts, anywhere, anytime.
            </li>
          </ul>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            {" "}
            Getting Started with Competition kettlebell :
          </h1>
          <p className=" text-[16px] text-silver">
            Whether you're a novice or a seasoned fitness enthusiast, mastering
            the basics of kettlebell training is essential for optimal results
            and injury prevention. Explore fundamental exercises such as swings,
            cleans, snatches, and presses, along with tips for proper form and
            technique.
          </p>
          <h1 className=" font-black text-[20px] text-silver mt-2">
            Below we are providing some easy to do workout with Competition
            kettlebell :
          </h1>
          <ul>
            <li className="lists">
              <span className=" font-black"> Single-Arm Swing:</span> Hold the
              kettlebell by the handle with one hand, arm straight down by your
              side. Swing the kettlebell back between your legs, then
              explosively up to chest height with a slight hip thrust. Lower
              back down with control for another rep, switching arms each time.
              (Targets hamstrings, glutes, core)
            </li>
            <li className="lists">
              <span className=" font-black"> Goblet Squat:</span> Hold the
              kettlebell by the horns (bottom flare) close to your chest. Stand
              with feet shoulder-width apart and squat down as if sitting in a
              chair, keeping your back straight and core engaged. Push through
              your heels to stand back up. (Targets legs and core)
            </li>
            <li className="lists">
              <span className=" font-black"> Figure-Eight Swings: </span>{" "}
              Similar to a swing, but hold the kettlebell between your legs at
              the bottom and overhead with both hands at the top, tracing a
              figure-eight pattern with the kettlebell throughout the movement.
              Focus on controlled movements and core engagement. (Targets
              hamstrings, glutes, core, shoulders)
            </li>
            <li className="lists">
              <span className=" font-black">Two-Hand High Pull:</span> Stand
              with feet hip-width apart and hold the kettlebell by the horns
              between your legs. With a hip hinge, explosively pull the
              kettlebell up to your chest, keeping your back straight and arms
              close to your body. Lower back down with control. (Targets
              hamstrings, back, shoulders)
            </li>
            <li className="lists">
              <span className=" font-black">Kettlebell Romanian Deadlift:</span>
              Similar to a dumbbell Romanian Deadlift, stand with a kettlebell
              in each hand and lower the weights down your legs while keeping
              your back straight and core engaged. Maintain a slight arch in
              your lower back and avoid rounding your spine. Stand back up to
              starting position, squeezing your glutes. (Targets hamstrings,
              glutes)
            </li>
            <li className="lists">
              <span className=" font-black"> Kettlebell Floor Press:</span>Lie
              on your back with your knees bent and feet flat on the floor. Hold
              a kettlebell in each hand by the horn and press them straight up
              towards the ceiling until your arms are extended. Lower back down
              with control. (Targets chest, triceps)
            </li>
            <li className="lists">
              <span className=" font-black">Kettlebell Single-Arm Row:</span>{" "}
              Hold a kettlebell in one hand with your other hand on the floor
              for support. Row the kettlebell towards your chest, squeezing your
              shoulder blade at the top. Slowly lower back down with control.
              Repeat with the other arm. (Targets back muscles)
            </li>
            <li className="lists">
              <span className=" font-black">Kettlebell Around the World:</span>
              Hold a kettlebell by the horn in one hand. Squat down and pass the
              kettlebell under your leg and around your back to the other hand.
              Stand back up and repeat, passing the kettlebell around the other
              leg. Focus on keeping your core engaged and back straight
              throughout the movement. (Targets core, shoulders)(Targets chest)
            </li>
            <li className="lists">
              <span className=" font-black"> Kettlebell Russian Twist: </span>
              Sit on the floor with your knees bent and feet flat. Hold a
              kettlebell with both hands in front of your chest. Twist your
              torso from side to side, engaging your obliques. Avoid using
              momentum and focus on controlled movements. (Targets obliques)
            </li>
            <li className="lists">
              <span className=" font-black">Kettlebell Bird-Dog:</span> Start on
              all fours with your hands shoulder-width apart and knees hip-width
              apart. Extend one arm forward and the opposite leg back, keeping
              your back straight and core engaged. Hold for a few seconds, then
              switch sides. (Targets core, stability)
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full mt-20">
        <h1 className="gradient-text font-black uppercase text-[25px]">
          3. Resistance bands
        </h1>
        <div className="mt-5">
        <div className=" w-[180px] md:max-w-[300px] mr-2 sm:mr-6 float-left ">
            <Image
              src="/product2.jpg"
              width={300}
              height={300}
              className="rounded-[8px]"
              alt="dumbbell"
            />
            <Link href='https://a.co/d/fcgQPhE' className="btn-secondary py-2 text-[18px] font-bold mt-3 w-full flex flex-center">
              Buy it from Amazon
            </Link>
          </div>
          <p className="text-[14px] text-silver">
            Forget bulky weights and expensive gym memberships. Resistance bands
            offer a powerful and portable way to achieve a full-body workout,
            anytime, anywhere. Whether you're a seasoned gym rat or a complete
            beginner, resistance bands provide a dynamic and challenging workout
            experience.
          </p>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Benefits of Resistance Bands:
          </h1>
          <p className="text-[16px] text-silver">
            Explore the myriad benefits of incorporating resistance bands into
            your workout regimen. From enhancing muscle engagement and promoting
            flexibility to improving overall functional strength and mobility,
            resistance bands offer unparalleled versatility and effectiveness
            for achieving your fitness goals. Their simplicity and adaptability
            make them an ideal choice for beginners and advanced athletes alike.
            However below we are providing some of the key benefits of
            Resistance bands:
          </p>
          <br />
          <ul>
            <li className="lists">
              <span className="font-black">Build Strength & Definition:</span>{" "}
              Resistance bands provide constant tension throughout exercises,
              stimulating muscle growth and helping to sculpt and define your
              physique.
            </li>
            <li className="lists">
              <span className="font-black">
                Enhance Flexibility & Range of Motion:
              </span>{" "}
              Stretching with resistance bands can improve flexibility,
              mobility, and joint health, reducing the risk of injury and
              enhancing athletic performance.
            </li>
            <li className="lists">
              <span className="font-black">Activate Stabilizing Muscles:</span>{" "}
              Resistance bands engage stabilizing muscles, promoting better
              balance, coordination, and functional movement patterns.
            </li>
            <li className="lists">
              <span className="font-black">Convenient & Portable:</span>{" "}
              Lightweight and portable, resistance bands allow you to work out
              anytime, anywhere, making them perfect for travel or home
              workouts.
            </li>
            <li className="lists">
              <span className="font-black">Adjustable Resistance Levels:</span>{" "}
              With various band tensions available, you can easily customize the
              intensity of your workouts to suit your fitness level and goals.
            </li>
          </ul>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Getting Started with Resistance Bands:
          </h1>
          <p className="text-[16px] text-silver">
            Whether you're new to fitness or a seasoned gym-goer, mastering the
            fundamentals of resistance band training is essential for maximizing
            results and minimizing the risk of injury. Explore a variety of
            exercises targeting different muscle groups, and focus on
            maintaining proper form and technique throughout your workouts.
          </p>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Below we are providing some easy to do workout with Resistance
            Bands:
          </h1>
          <ul>
            <li className="lists">
              <span className="font-black">Bicep Curls:</span> Stand on the band
              and hold the ends with an underhand grip. Curl your arms towards
              your shoulders, squeezing your biceps at the top. Slowly lower
              back down. (Targets biceps)
            </li>
            <li className="lists">
              <span className="font-black">Overhead Press:</span> Loop the band
              behind your back and hold the ends with an overhand grip at
              shoulder level. Press your arms straight overhead until your arms
              are extended. Lower back down with control. (Targets shoulders and
              triceps)
            </li>
            <li className="lists">
              <span className="font-black">Lateral Raises:</span> Stand on the
              band and hold the ends with an overhand grip at your sides. Raise
              your arms out to the sides until shoulder-height, keeping a slight
              bend in your elbows. Lower back down slowly. (Targets shoulders)
            </li>
            <li className="lists">
              <span className="font-black">Squats:</span> Loop the band around
              your thighs just above your knees. Stand with your feet
              shoulder-width apart and squat down as if sitting in a chair. Keep
              your core engaged and back straight. Push through your heels to
              stand back up. (Targets legs and core)
            </li>
            <li className="lists">
              <span className="font-black">Glute Bridges:</span> Lie on your
              back with your knees bent and feet flat on the floor. Loop the
              band around your thighs just above your knees. Lift your hips off
              the ground, squeezing your glutes at the top. Slowly lower back
              down to the starting position. (Targets glutes and hamstrings)
            </li>
            <li className="lists">
              <span className="font-black">Resistance Band Rows:</span> Sit on
              the floor with your legs extended in front of you. Loop the band
              around your feet and hold the ends with an overhand grip. Lean
              forward with a flat back, pulling the band towards your chest,
              squeezing your shoulder blades. Lower back down with control.
              (Targets back muscles)
            </li>
            <li className="lists">
              <span className="font-black">Walking Lunges:</span> Hold the band
              behind your back with your hands clasped. Step forward with one
              leg, lowering your body until both knees are bent at 90-degree
              angles. Push back up through your front heel to return to the
              starting position. Repeat with the other leg. (Targets legs and
              core)
            </li>
            <li className="lists">
              <span className="font-black">Plie Squats:</span> Loop the band
              around your thighs just above your knees. Stand with your feet
              wider than shoulder-width apart, toes pointed outward. Squat down
              as if sitting in a chair, keeping your core engaged and back
              straight. Push through your heels to stand back up. (Targets inner
              thighs and glutes)
            </li>
            <li className="lists">
              <span className="font-black">Banded Leg Extensions:</span> Lie on
              your stomach with the band looped around your ankles. Extend your
              legs straight back, lifting your heels off the ground. Squeeze
              your hamstrings at the top. Slowly lower back down to the starting
              position. (Targets hamstrings)
            </li>
            <li className="lists">
              <span className="font-black">Plank Row (Bodyweight):</span> Start
              in a high plank position with your forearms on the floor. Wrap the
              band around your lower back and hold the ends with your hands. Row
              one arm towards your chest, squeezing your shoulder blade. Lower
              back down and repeat with the other arm. (Targets core, back)
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full mt-20">
        <h1 className="gradient-text font-black uppercase text-[25px]">
          4. Jump ropes
        </h1>
        <div className="mt-5">
        <div className=" w-[180px] md:max-w-[300px] mr-2 sm:mr-6 float-left ">
            <Image
              src="/product5.jpeg"
              width={300}
              height={300}
              className="rounded-[8px] "
              alt="dumbbell"
            />
            <Link href='https://a.co/d/79S91RI' className="btn-secondary py-2 text-[18px] font-bold mt-3 w-full flex flex-center">
              Buy it from Amazon
            </Link>
          </div>
          <p className="text-[14px] text-silver">
            The jump rope, a simple yet powerful tool, brings a fun and
            effective cardio option to your workout. This classic tool
            strengthens your heart, improves coordination, and burns calories
            all at once. With its portability and affordability, the jump rope
            lets you get a full-body workout anytime, anywhere.
          </p>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Benefits of Jump Ropes:
          </h1>
          <p className="text-[16px] text-silver">
            Don't underestimate the mighty jump rope! This unassuming tool packs
            a serious fitness punch. It strengthens your heart, boosting
            cardiovascular health and improving overall fitness. Jumping rope
            also torches calories, making it a fantastic tool for weight
            management. But the benefits go beyond physical health – it also
            enhances coordination and agility, keeping you light on your feet.
            Plus, the jump rope's portability and affordability make it a gym
            bag essential, allowing you to squeeze in a quick and effective
            workout anytime, anywhere. So, jump your way to a healthier, happier
            you! Here are some key benefits of Jump Rope:
          </p>
          <br />
          <ul>
            <li className="lists">
              <span className="font-black">Burns Calories:</span> It's a
              fantastic calorie-burning exercise, making it a great tool for
              weight management or maintaining a healthy weight.
            </li>
            <li className="lists">
              <span className="font-black">
                Improves Coordination & Agility:
              </span>{" "}
              Jumping rope requires coordination between your upper and lower
              body, promoting better coordination and agility.
            </li>
            <li className="lists">
              <span className="font-black">Increases Bone Density:</span> The
              repetitive jumping motion can help maintain bone density, keeping
              your bones strong.
            </li>
            <li className="lists">
              <span className="font-black">Full-Body Workout:</span> Jumping
              rope engages multiple muscle groups throughout your body,
              providing a well-rounded workout.
            </li>
            <li className="lists">
              <span className="font-black">Portable & Affordable:</span> A jump
              rope is a lightweight, inexpensive piece of equipment, allowing
              you to exercise anywhere, anytime.
            </li>
          </ul>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Getting Started with Jump Ropes:
          </h1>
          <p className="text-[16px] text-silver">
            This classic tool offers a simple and effective way to improve your
            fitness. It strengthens your heart, boosts coordination, and burns
            calories – all in a fun, portable package. Jump rope your way to a
            healthier you – it's the perfect starting point for your cardio
            journey!
          </p>
          <h1 className="font-black text-[20px] text-silver mt-2">
            Below we are providing some easy to do workout with Jump Ropes:
          </h1>
          <ul>
            <li className="lists">
              <span className="font-black">Basic Jumps:</span> Master the
              fundamental jumping motion. Start slow and focus on smooth,
              controlled jumps with both feet landing softly together each time.
            </li>
            <li className="lists">
              <span className="font-black">High Knees:</span> Incorporate high
              knees into your jumps, bringing your knees towards your chest with
              each jump.
            </li>
            <li className="lists">
              <span className="font-black">Single Leg Jumps:</span> Alternate
              jumping on one leg at a time, focusing on balance and control.
            </li>
            <li className="lists">
              <span className="font-black">Slow Mo Jumps:</span> Slow down your
              jump rope pace to focus on proper form and technique.
            </li>
            <li className="lists">
              <span className="font-black">Rest & Recovery:</span> Take short
              breaks in between sets to catch your breath and prevent burnout.
            </li>
            <li className="lists">
              <span className="font-black">Double Unders:</span> This advanced
              technique requires two rotations of the rope per jump. Practice
              single unders first and gradually increase the speed.
            </li>
            <li className="lists">
              <span className="font-black">Lateral Jumps:</span> Jump
              side-to-side while turning the jump rope, incorporating footwork
              drills into your workout.
            </li>
            <li className="lists">
              <span className="font-black">Jump Rope Squats:</span> Combine
              jumps with squats, performing a squat with each jump for an added
              leg challenge.
            </li>
            <li className="lists">
              <span className="font-black">Jump Rope Lunges:</span> Alternate
              jumping lunges, incorporating a lunge with each jump for lower
              body work.
            </li>
            <li className="lists">
              <span className="font-black">Interval Training:</span> Alternate
              between high-intensity jump rope sets and short rest periods to
              push your limits and maximize calorie burn.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
