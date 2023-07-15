"use client";
import ImgSlider from "@/components/Slider";
import { motion } from "framer-motion";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <ImgSlider />
          <p className=" mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            maxime nobis provident quaerat laborum atque labore incidunt, natus,
            doloremque, dolorum blanditiis repellendus quos. Ratione consequatur
            ipsa amet vero quia corporis quos? Explicabo soluta, velit vitae
            consequatur iure qui excepturi aperiam accusantium possimus debitis
            dolorum voluptatum omnis dicta modi, quis corporis quibusdam
            delectus facere, voluptatibus dolorem? Libero quaerat ipsam
            assumenda explicabo, vitae harum impedit natus accusantium
            laudantium qui? Inventore, totam dignissimos? Labore distinctio
            similique pariatur dignissimos, eius voluptates veritatis, nobis
            itaque explicabo aliquid rerum voluptatibus cumque hic facere
            commodi vel dolor omnis excepturi magni temporibus ratione neque sed
            iusto at. Quidem odio placeat temporibus officiis voluptatum dicta
            natus nihil laboriosam consequatur omnis sit impedit enim ab sed,
            alias maxime eos laborum molestias quas recusandae sequi quia. Quas
            explicabo debitis molestiae dignissimos adipisci labore culpa
            obcaecati veritatis! Quia praesentium quo rerum? Facilis fuga
            voluptatibus facere inventore harum doloremque nobis ad, dignissimos
            omnis suscipit odio aut ipsa, nam unde blanditiis reprehenderit
            corporis, fugiat cumque iure pariatur architecto. Minus provident
            magnam error sapiente enim libero, sunt esse quis deleniti pariatur
            nisi temporibus tempora similique aut corrupti delectus eum earum
            culpa aliquid sed quo quod a dolorem? Dolorem illo ipsa doloremque
            cupiditate asperiores libero optio amet reprehenderit velit eos
            quaerat odit non perspiciatis reiciendis vero at quas eligendi
            delectus fuga, itaque eius, ea nisi aperiam recusandae! Corporis at
            accusamus ducimus ea commodi consequatur voluptate fugit unde totam
            eius nobis similique, velit nulla veniam officiis tempora, deserunt
            doloribus earum laudantium dicta quas? Odio numquam a natus quod est
            doloribus rerum iste, soluta nostrum repellendus temporibus,
            accusamus porro autem perspiciatis consectetur quasi totam ipsa odit
            quibusdam sequi ex ratione praesentium? Consequatur nobis, vel quis
            voluptate voluptatum quidem repellendus quaerat, exercitationem
            officia explicabo, doloremque eaque? Similique, repudiandae
            dignissimos reprehenderit officia aut illo aliquam perspiciatis
            quisquam natus amet expedita exercitationem voluptatum quae quasi a
            nobis neque dolor nihil quas obcaecati sunt assumenda aspernatur
            eius eveniet! Exercitationem dicta corporis tenetur doloribus
            officia, voluptas ut fugit, optio illo aperiam eos molestiae itaque!
            Ullam, assumenda libero? Hic reiciendis, quae sed sequi rerum
            distinctio minima facilis repellat necessitatibus. Harum fugiat
            aliquid, commodi modi eum sit architecto non itaque totam quibusdam
            officia quas vitae tempore facere distinctio culpa ipsum obcaecati
            alias et maiores ex sapiente illo pariatur! Molestias, maxime
            consequatur at tempora modi aspernatur iusto ipsum accusantium ea.
            Consequuntur tempore reiciendis provident harum quam saepe. Iusto ex
            cum dignissimos nostrum adipisci provident accusamus quasi. Velit,
            beatae incidunt. Porro optio temporibus harum voluptatum deleniti
            magni dicta soluta possimus ipsam placeat, exercitationem, unde
            eligendi ad maiores officia provident, aliquid maxime facilis? A
            quam maiores illo vitae, alias eum odit officiis rem, totam quia
            deserunt corrupti voluptatibus? Soluta earum mollitia quaerat
            officiis! Harum sapiente eius odio. Reprehenderit, esse? Magni unde
            sit ab numquam distinctio blanditiis labore, aperiam nobis, expedita
            quam nisi sed accusamus quos magnam. Molestiae labore quas corrupti
            quasi numquam vel illum aliquam inventore et culpa ab impedit
            dolores reprehenderit aperiam id, voluptatum minima necessitatibus
            praesentium dolorum exercitationem? Nam autem minus similique,
            voluptatibus reiciendis necessitatibus accusamus?
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
