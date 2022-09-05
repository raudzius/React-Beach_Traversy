import React from 'react';
import Section from './Section';
import Box from './Box';
import sectionClasses from './Section.module.scss';
import boxClasses from './Box.module.scss';

const Main: React.FC = () => (
  <main>
    <Section className={sectionClasses.sectionA}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure
        dolores nesciunt, saepe qui consequatur accusantium architecto non eum
        cum numquam velit pariatur incidunt maxime repellendus, vitae
        voluptatibus porro optio voluptates nemo? Obcaecati excepturi molestiae
        eligendi, autem temporibus doloremque commodi fugiat pariatur
        consequuntur, vero quasi. Alias nobis unde, culpa asperiores fuga
        temporibus quam quis eum? Voluptatem laboriosam ab ad aut, repudiandae
        amet distinctio sit! Et nesciunt perferendis, numquam optio inventore
        excepturi ipsa impedit aliquid qui dignissimos, laborum esse a
        aspernatur, blanditiis recusandae pariatur cupiditate ea illo fugiat
        corrupti magni natus! Nostrum sapiente tempora in, quam unde quis
        dolorum eum. Alias.
      </p>
    </Section>
    <Section className={sectionClasses.sectionB}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure
        dolores nesciunt, saepe qui consequatur accusantium architecto non eum
        cum numquam velit pariatur incidunt maxime repellendus, vitae
        voluptatibus porro optio voluptates nemo? Obcaecati excepturi molestiae
        eligendi, autem temporibus doloremque commodi fugiat pariatur
        consequuntur, vero quasi. Alias nobis unde, culpa asperiores fuga
        temporibus quam quis eum? Voluptatem laboriosam ab ad aut, repudiandae
        amet distinctio sit! Et nesciunt perferendis, numquam optio inventore
        excepturi ipsa impedit aliquid qui dignissimos, laborum esse a
        aspernatur, blanditiis recusandae pariatur cupiditate ea illo fugiat
        corrupti magni natus! Nostrum sapiente tempora in, quam unde quis
        dolorum eum. Alias.
      </p>
    </Section>
    <Section className={sectionClasses.sectionC}>
      <Box className={boxClasses.box1} />
      <Box className={boxClasses.box2} />
      <Box className={boxClasses.box3} />
    </Section>
  </main>
);

export default Main;
