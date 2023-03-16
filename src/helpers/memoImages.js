export const MemoImages = [
    'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => 0.5 - Math.random());