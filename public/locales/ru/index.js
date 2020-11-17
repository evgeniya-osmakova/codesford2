import team from './team/team.js';
import main from './main/main.js';
import carousel from './main/carousel.js';
import team_mini from './main/team_mini.js';
import header_footer from './header_footer/header_footer.js';
import authorization from './autorization/authorization.js';
import notFound from './notFound/notFound.js';
import profile from './profile/profile.js'

export default { ru: { translation: { ...team, ...main, ...carousel, ...team_mini, ...header_footer, ...authorization, ...notFound, ...profile } }};
