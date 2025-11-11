import {componentsRoutes, docsRoutes} from "@/Routes/index.js";

function routeToSearchData(route) {
    const path = route.path.replace(/^\//, '');
    let title = path
        .split('/')
        .pop()
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase()) ?? '';

    let description = `Page for ${title}`;
    let matched = [];

    if (route.path.startsWith('/docs/')) {
        matched = ['documentation', 'docs'];
        description = `Documentation page: ${title}`;
    } else if (route.path.startsWith('/components/')) {
        matched = ['component', 'ui', 'react', 'nextjs'];
        description = `Component example: ${title}`;
    } else if (route.path.startsWith('/blocks/')) {
        matched = ['block', 'layout', 'section'];
        description = `Block example: ${title}`;
    } else if (route.path.startsWith('/animations/')) {
        matched = ['animation', 'visual', 'effect'];
        description = `Animation example: ${title}`;
    }

    return {
        title: title,
        description: description,
        url: route.path,
        tags: matched,
    };
}

const ComponentsRoutes = [
    ...componentsRoutes,
];

const DocsRoutes = [
    ...docsRoutes,
];

export const componentsSearchData = ComponentsRoutes.map(routeToSearchData);
export const docsSearchData = DocsRoutes.map(routeToSearchData);

export default {docsSearchData, componentsSearchData};