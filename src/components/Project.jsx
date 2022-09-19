import React from "react";
import project1 from '../media/project1.webm'
import project2 from '../media/project2.webm'
import project3 from '../media/project3.webm'
import project4 from '../media/project4.webm'

export default function Project(){
    return(
        <div>
        <h1>Projects</h1>
        <div>
         <video autoPlay width="250">
            <source src={project1}/>
        </video>
        <figcaption>
        <h2>Memory Game</h2>
        <img width={50} src="https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png"/>
        <img width={50} src="https://toppng.com/uploads/preview/html-css-js-icons-11563328364gmstz4ubs9.png"/>
        <img width={50} src="https://pngset.com/images/logo-javascript-pattern-copyright-framework-free-javascript-logo-label-text-symbol-trademark-transparent-png-1498648.png"/>
        </figcaption>
        </div>
        <div>
        <video autoPlay width="250">
            <source src={project2}/>
        </video> 
        <figcaption>
        <h2>Travel Itinerary</h2>
        <img width={50} src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"/>
        <img width={50} src="https://e7.pngegg.com/pngimages/212/722/png-clipart-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue.png"/>
        <img width={50} src="https://e7.pngegg.com/pngimages/562/914/png-clipart-mongodb-document-oriented-database-acid-nosql-business-text-people.png"/>
        <img width={50} src="https://e7.pngegg.com/pngimages/872/1013/png-clipart-node-js-javascript-serverless-computing-software-developer-github-node-js-blue-text.png"/>
        </figcaption>
        </div>
        <div>
        <video autoPlay width="250">
            <source src={project3}/>
        </video> 
        <figcaption>
        <h2>Group Finder</h2>
        <img width={50} src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"/>
        <img width={50} src="https://e7.pngegg.com/pngimages/212/722/png-clipart-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue.png"/>
        <img width={50} src="https://w7.pngwing.com/pngs/358/849/png-transparent-postgresql-database-logo-database-symbol-blue-text-logo-thumbnail.png"/>
        <img width={50} src="https://toppng.com/uploads/preview/sequelize-logo-116093759810rkwwbipng.png"/> 
        </figcaption>
        </div>
        <div>
        <video autoPlay width="250">
            <source src={project4}/>
        </video> 
        <figcaption>
        <h2>NGOs-Give Charity</h2>
        <img width={50} src="https://banner2.cleanpng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg"/>
        <img width={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///8BYq/t7e3u7u7r6+sAXa329PFiksUAWqxpmcsAXKwAYK5hk8IAWKsAV6zy8e9pm8l1oM681OiwyN0AVKusxNyZs9K40OecuduRr9Gkvt5Vi8L49vHI2OX5/f6bt9N/p9IAaLQAbLQqeLnI2ONVjcE3gcEacrajvNavyuXV4Ojz+f3j7/d2pdDM3vCHrNTU5vJAgr2+0d+Eqs3p9f3IL3+0AAAK9UlEQVR4nO1dbXuiOhAtxUQkJWhNWxVUqq1W263a7v//bZfwIrarMAkBgcv5cJ+5usCckmROMpN4c8Nxq+v6bUOtm4r40TJsGWYy9NFpqBWYIdlOQy396s2oWEtvGdbe0k+6ZKeRVjSgVsOZYqwQ1WhQhcbDq/vRMszN8OrKozir1TS1t/4PEb/5DJMuef3g3GoaKStENRpUofHw6n60DHMzvLryKM5qNU3trf9DxG8+w6RLXj84t5pGygpRjQZVaDy8uh8tw9wMC9UW4ZMwR2C5vmGX8NxSNI3Ojdl0+Db2Bl1ntVyvF+v1cuV0B974bTidFe9BkZpGt7E93XgrjVHLMk0TIRIDIf//LYsycvA2U/+N6oV4UHTE384dRA2TEC0FxLQocubb+jGcTZbMQKnkEpbIYMvJe1EMky6pLNTq+KPHLBC5I3ySvQ+s10TTzPrMFOMXwGT9mXJfYihtHk+WCWud/3K0nuoQ8f8wOXoB2KDyDHFPsAP+gtXD1dY0+A/NRVDT6B+30prmM08TDcE+FflSjKZZSI4xJyBrRb4UEvEVvMLwJVaW4S6Jg8SwqIFkGBq7Cmua3pGStZgMp0OPGOIMUa+6mgbfxQzpPJoBSkRH1MWV1TRHhvTLjT5z58Lhw2dY2YgfM7TG7vEz91W0M9aBoWaffLsVbafFMFSjaSKGpodPvnWXgjHy2A+rqGn6AUNj/uNbT3AqFY+lldQ0IUPr7ce3O8GIwRlWNuKHDM3xj2+7gkNNDRiS1Y9v05eiimeoVNOEDDX2cfLZk2hArIOmIWusR5/pHWFtWgtNYzq2HX62XQvPp2oR8TX0/MB16WxiiE8Y68HQDxnGylkyialFHTRNCEKAS95nGFZd0+REDTSNAoYVj/gtw5IZFqFp8jOsuqbJybAOmiYvw1pE/JZh2QwL0DR5GLaa5nqapsssDsOKcdFKWZ2K42G4aJ6UUiWWLeCV6tzT09MDxxNHmnU/uPy2I4b2V7fv446jn1jOoTd+6Lj2lRjyvy9HtjW5PK+KGQ4ZOg/Dos4XBjNUqmngVgZD/9/Zw5SKAMSWH7CnqdU0cMt+TGEYjaX3qUtYiI3d8jUN3MpgeJvNUNNoHxQ3a8xQs+5c5QztM0O3lOWqYKjRbzhDmD74fBy8vvYHHD0OeWtwuLyGA+uHAYLKFFWaBm/7JjNMFBS/BvWweay0lX7IWBqBEHWa5r3LZOvxRHGMh4D6MXOAFUX8e7nCESmIMNTYNkPdABmOVFQCQSHEEN1lhAyYphmXSVCkH/pgndtU70Ga5q1UgiJjqQ9jlF/TfJRLUCAecpDn/BFfQb2hEMQYamyfPpRkMxzRajM0xukT4ojhZVXwnrfoVxhi/VAjazeXpsF/ZDYW5ILYWOo30/eL3kM0zW3pr1AsHvqg92kdLSvi23OZLG4+mF7I8AHI0BjnYeiKFxrkhjkKGUL/uMRJZ5iuaV5KjoUc9Cnsh99gKXzJe4CmsUflN1JfTOuBB+DCVNrRpTWNuyq/kQblRtwB8BX0xZaN+PYVRlLNHIf+wsWiNZRnCB2wVcKKPHgDdxBjDmB4XhXY49LDvUbndugBvIMY37a0phGuQs8N8xB6oAuM4ubgvPcQTfNc9kCDFpEHWKDuFnVTBsv0iD8rOxpay3AH/43IK9SQI81wX/LknnnxyhkW0VJkmcowTdPclziUEpN1tzj2YCCiNIL9fFKapjTZTZBFn3dbHHuAxVaGyCItC3VzaZDxLSy6j+C898g0OILV7t+WYRmU0UVv84KTmOYOBXvHwpWM+HiQKxwSjVjUWjiD7xHHmOO3NX97+PobDC3H5+qu8NqePMNc4dCn50z2uuviy0lvjO1/Dv3AfeHxbZG2tB8xPKtp8EGeIWLLzezinVOs/UK4a5AFltU0onuyTvh19/6rgmW1EkvH21cm/szjWCquaSQn+ISuPi42/TTry2EyrSYjHqYxXEi1UvRrZxfA4t1yv3umcr0CHeQZyrxDY9Wxf93PPh4M9dOKk97b4dhBVDo/maFL0zSNjPBmA6wf78Irt/b3m0eOCcdva+z1DmuTWRIbTxLwxTk5TYMl3iGbnN5lv1tTZlnGZZhmasYbxnBny2oacYYs6YL2zWQhtWdGGKA5/nmGwmMpm0flZv7Fc1RWSkd+nUZ4jzL13HgCu12XNy8BrbVd0DRCDAk6xBrfnUsEbmnQjnTuSXAHL4oPssKDMqfORDvvPUTTCM1DNRbngFyn1EXIrLxFGkOhxUT0Gg9Qd+WuI+fJPT2IvEManQyIxyUvlGflD1Wt05iDUI3p07IX6JIcsPg6zYvA2/CfE96w7DVWssQpLynGhVfcgTOMtxDgcdmpDmAtxvl/4z6DnxMfXyXwR1EEts/BEDvQgBjEJH6F6EEmuQGtibqQe/qG+htMYPgVZRWhJk8e5aoRBhbtBOI3uOKp9IQj3WatAKXmnsCpGfoRXtErOx2H7tzLDRRSbQKcP5FFdPRV6fnG3DXCwI6IXnFwRdmFmqA67zRNA66nCc6+6kicRZMXKNV7UI0wbCHDeAiuKD3vH+63yFcjDCsZ4uf/ctFdciEj9TK8hzCEjaZWKO9xuUMp7SrZ9/QH8hIjhrbosV65wHoZgQKgaYIaYchLjN+hkr3cMBD2mJZxgmoaviwMSQQHkuZW0V5uCBBbfVz2WUDTBFkTwISPr1jqGQzJhV29wjANizlfkC4IifjcAkzaAQzJge/O63L08lhF7OV2J5kUAQyNIKGRc2Om1H78dE0TWrvM/arDsNwuk2Gh26fl9z11sJfxFsOxNPV8GuPRLpsceN8Tz2A8pKdnAdHCZyia9FZjwRjqeJuaYm8AQ7/D7nuU8nTmuQGcARjOXdBxEtwqgmGqKoit2f1393BwgmH71fFxtA77TIZoMPRxzzHMsKa6UAWOwvNp4vNUXNfFvyz7NlPTIH5oC+Uw0i3WhVfgKNE0IlYlz2trGdafIUTTgK32zD0Yw/bMvWIifsuw8gyVqIf2zD0owyqfuVfJeFgFhvyHOxvMkJh0fVhT68ixaZqGGOMOxu7NRjueWN8sTUMWUSmVrR+itE7DNA1Kyt7jgt1mRXzj7YRNlI5tFEOCTtdkol1IjdI06PV0F7Y9MiOGzdE05u7HXcIt+I3SNGEp1fEuCcPGRPzgd5OSu4SHCzeKocb+nt4lihaN0jRm/+QuI+vIsEGaJt5l07nFX1GCq2GaRmNecK2N3+JNRJWO+DLVJsbz6PPj83F9zMJWmqEns1eNGIzRkw2I5q66mkb/UlG5R7+ulnsCWNK7vxME+5Yrq2lUnIbC9op8KSTiKziPl42U+VIMw5t+vq5I+wp9KUDT+MDfOTZXEvbtKvRFvaYJrU9NdtOFQT4V+3KEukYRWB6TqBUmiHkz9b4Uw/BmOxA9QwAZdLAtxJdiGOq487hkBvAnHgmy2HJ+q1TJFKRpTi0b/904iFomST0zgZgWRc7mr2sr96AYTXNq+STt6cY7EEYtI/xBBM42+G9weJRFGVp5m6mL7WI8KELT/BuNfLy/DOc7r+es1usFx3q5cnqD8dtwykcWoWrRKkT8s93StqMzW9ykigrHhWzFPbc8hte0rvZ7T6VZRWiailkhqtGgCo2HV/ejZVhBTVMZq0BNUxWr+fGwZVh3q9U0DbBCVKNBFRoPr+5HyzA3w6srj+KsVtPU3vo/RPzmM0y65PWDc6tppKwQ1WhQhcbDq/vRMszLMBlQm2f9B6qSe5byyOUCAAAAAElFTkSuQmCC"/>
        <img width={50} src="https://image.pngaaa.com/339/4169339-middle.png"/>
        <img width={50} src="data:image/png;base64,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"/>
        </figcaption>
        </div>
        </div>
    )
}