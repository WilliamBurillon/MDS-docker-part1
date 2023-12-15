import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_9591e01e.mjs';
import 'clsx';
import 'html-escaper';

const html = "<h1 id=\"contenu-du-cours\"><a aria-hidden=\"\" tabindex=\"-1\" class=\"header-anchor\" href=\"#contenu-du-cours\"><span>#</span></a>Contenu du cours</h1>\n<ol>\n<li>\n<p>La conteneurisation, c’est quoi ?</p>\n</li>\n<li>\n<p>Docker, l’outil incontournable de la conteneurisation</p>\n</li>\n<li>\n<p>Ecrivez votre propre image docker</p>\n</li>\n<li>\n<p>Et si on parlait de clusterisation</p>\n</li>\n</ol>";

				const frontmatter = {};
				const file = "/Users/williamburillon/code/mds/MBA1FullStack-Docker/doc/course/README.md";
				const url = undefined;
				function rawContent() {
					return "# Contenu du cours\n\n1. La conteneurisation, c'est quoi ? \n\n2. Docker, l'outil incontournable de la conteneurisation \n\n3. Ecrivez votre propre image docker\n\n4. Et si on parlait de clusterisation ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"contenu-du-cours","text":"#Contenu du cours"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
