export function isActivePath(currentUrl: string, href: string): boolean {
    if (href === '/') {
        return currentUrl === '/' || currentUrl === '';
    }

    return currentUrl === href || currentUrl.startsWith(`${href}/`);
}

export function navHref(link: { href: string; routeName?: string }): string {
    if (link.routeName && typeof route === 'function') {
        try {
            return route(link.routeName);
        } catch {
            return link.href;
        }
    }

    return link.href;
}
