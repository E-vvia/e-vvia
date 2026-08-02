export default interface MenuLink {
    title: string;
    url: string;
    subMenu?: MenuLink[];
}