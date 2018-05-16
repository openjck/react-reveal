import React from 'react';
import Article from '../Article';
import Page from '../Page';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function P({ children }) {
  return <p className="article-text">{children}</p>;
}


function Post() {
  return (
    <Article title="Dawn of the Dead Packages">
<Zoom><img width="384" height="177" className="float-lg-right" src="/assets/blog/hand.jpg" alt="Zombie hand" /></Zoom>
<P>
  If you used <a href="https://www.npmjs.com/">npmjs.com</a> website to look for NPM packages in the
  past 3-4 years you  might be having abandoned, outdated and unmaintained "zombie" packages in
  your <code>package.json</code>. Read the full story below. It will be updated as events unfold.
</P>
<P>
  <strong>Update:</strong> NPM seems to have fixed the issue described below.
</P>
<div className="clearfix"> </div>
<h2>A curious case of a missing package</h2>
<P>
  I'm an author of a React animation library called <a href="https://www.react-reveal.com/">React Reveal</a>.
  Like many such projects I'm publishing it
  on <a href="https://github.com/rnosov/react-reveal">Github</a> and <a href="https://www.npmjs.com/package/react-reveal">NPM</a>.
  It has over 400 stars on Github and hundreds of daily downloads on NPM.
  I've been doing this on and off for several years now.
</P>
<P>
  Perhaps like many package maintainers I'm became addicted on checking download counter on my NPM page.
  I'd  often go to npmjs.org website type "react reveal" in the search box and after a few clicks
  I would be able to finally see the counter. I suppose it is one of these little guilty pleasures.
</P>
<P>
  Then, one day I couldn't find my package at all. Strange, I thought. Did I offend NPM somehow?
  Then, I remembered that I've added a few keywords to my package.json (animation effects name) in my
  last release. Was it too much for npm and I'm considered a spammer now?
</P>
<h2>Things are starting to get interesting</h2>
<P>
  I quickly reverted the changes and, lo and behold, I'm back on top of search results.
  I guess you learn something new every day. But something still felt wrong.
  What could it be? Oh yeah, when I type exact name of my package <code>react-reveal</code> into the search bar,
  the top hit is some old unrelated package that was abandoned a year ago and I'm not even sure what it does.
  <Fade right onReveal={ () => Page.event('interesting') }>
    <img width="640" height="400" src="/assets/blog/react-reveal.png" alt="Screenshot of react-reveal search suggestions" />
  </Fade>
</P>
<P>
  In fact, my package was nowhere to be found in the list of suggestions. ( <b>Update:</b> Curiously it made a come back just before publishing time).
  All the suggestions were for some kind of old unrelated packages that seemed to be dead for a long time.
  Kind of a digital package graveyard.
  Then, things grew even more stranger.
  Even as I was typing the exact name of my package into the search bar and pressing enter, sometimes,
  I would still be taken to some abandoned package. Was I haunted by ghosts of dead packages?
  Time to investigate.
</P>
<h2>The Aha! moment</h2>
<P>
  After a couple of tries it became clear that if I'd hovered anywhere over
  the auto suggestion box and then moved my mouse outside the suggesting box
  (the highlight would disappear) and even clicked back on the input and pressed enter
  (or the search button) it would take me to the package that I was hovering  last.
  It would take to this dead package page no matter what was in the search box.
</P>
<P>
  Well, tough luck being a small project. NPM doesn't care about you, I reckoned.
  Perhaps, just to feel even more miserable, I did a search on some well known packages
  to see what suggestions I would be offered. Surely, it will work for, say, NPM itself.
  <Fade left  onReveal={ () => Page.event('Aha') }>
    <img width="730" height="456" src="/assets/blog/npm.png" alt="Screenshot of npm search suggestions" />
  </Fade>
</P>
<P>
  <code>Express</code>, <code>React</code>, <code>Gulp</code>, <code>npm</code> itself -
  all suggestions were for old and dead packages.
  They were abandoned 2, 3, 4 years ago, sometimes completely unrelated.
  Even worse, if you flick your mouse over any of the suggestions in a disbelief that, say,
  npm can't find itself, you would be taken straight to the dead package page even
  if you didn't click any of the suggestions, clicked back on the input and pressed enter.
</P>
<P>
  Well, npmjs users are a smart lot, aren't they?
  They wouldn't fall for such thing and would never confuse a dead package with a real thing.
  On the contrary, the download counters of these old packages were huge.
  Pretty much every regularly maintained package is being haunted by a ghost.
  Clearly, a lot of folks are falling for this.
  Lets have a look at a few cases.
</P>
<h2>Case Of jquery-ui-npm </h2>
<P>
  The top suggestion for <code>npm</code> on it's own site is a package called <code>jquery-ui-npm</code>.
  It is sort of difficult to confuse <code>npm</code> with <code>jquery-ui-npm</code> as it even doesn't
  have a readme and was last released in july 2016. Perhaps, it is being confused with <code>jquery-ui</code> npm package
  which seems to be a maintained package and the official release of <code>jquery-ui</code>. But looking at the
  graph below you can clearly see that starting in October of 2016 things have picked up steam for <code>jquery-ui-npm</code>.
</P>
<Fade right  onReveal={ () => Page.event('jquery-ui') }>
  <img width="730" height="280" alt="jquery-ui-npm downloads" src="/assets/blog/jquery-npm.png" />
</Fade>

<h2>Case Of png-async</h2>
<P>
  <code>png-async</code> had miserable download stats while it was maintained but things have markedly improved
  since its final release in September 2016. Perhaps, it has something to do that it's a top suggestion
  for <code>async</code> search term.
  <Fade left  onReveal={ () => Page.event('png-async') }>
  <img width="730" height="280" alt="png-async downloads" src="/assets/blog/png-async.png" />
  </Fade>
</P>

<h2>Case Of jquery.cookie</h2>
<P>
<code>jquery.cookie</code>  is no longer maintained, superseded by <code>js-cookie</code> about three years ago.
It's latest release is in May 2015. Against all odds, it's doing great. It's either jquery is becoming massively popular again
or, more likely, that it is because <code>jquery.cookie</code> is a top suggestion for <code>js-cookie</code> ( a maintained package ).
<Fade right  onReveal={ () => Page.event('jquery cookie') }>
  <img width="730" height="280" alt="jquery.cookie downloads" src="/assets/blog/jquery.cookie.png" />
</Fade>
</P>

<h2>Case Of gulp-batch-replace</h2>
<P>
  The top suggestion for both <code>gulp-replace</code> and <code>gulp</code> itself is the <code>gulp-batch-replace</code>.
  It is a fork of a gulp plugin called <code>gulp-replace</code>. <code>gulp-replace</code> is a very useful plugin.
  For example, <code>react-reveal</code> is using it.  The <code>gulp-batch-replace</code> for all intents and purposes
  is a dead fork. It has had one release in February, 2014. Issues aren't answered,
  pull requests are left untouched and it hasn't been updated since
  the publishing date ( unlike <code>gulp-replace</code> ).
  But as far as downloads are concerned it is doing really great.
  Have a look a the following statistics:
</P>
<Fade left  onReveal={ () => Page.event('replace') }>
  <img width="730" height="308" alt="gulp-batch-replace downloads" src="/assets/blog/replace.png" />
</Fade>
<h2>In Conclusion</h2>
<P>
  I think, it is quite clear by now that a lot of of projects are having old,
  abandoned packages in their dependencies.
  Packages, that would never receive any update (even for critical vulnerabilities),
  costing both NPM and its users wasted bandwidth, lost productivity.
  Kind of a digital zombies, if you will.
  They were alive at some point, then were put to rest by their authors and
  finally were resurrected from their digital grave by the NPM autosuggest.
</P>
<P>
  These living dead packages could be quietly hiding in the dark corners of <code>package.json</code>.
  As they never receive any updates and named confusingly similar to the living packages
  they never attract any attention to themselves.
</P>
<P>
  It seems that the root cause of this unfortunate situation is
  the following chain of flaws on npmjs.com website:
</P>
  <ul>
    <li>Search field is not autofocused. Therefore, users have to take one hand off the keyboard
    and place it on the mouse to select the search field and
    then awkwardly start typing search term with the other hand</li>
    <li>Autosuggestion algorithm has a strange tendency to favour packages that
    are no longer receiving updates</li>
    <li>The final flaw is that you'd only need to hover the wrong suggestion to be taken to its page.
    It is quite natural to hover as you have one hand on the mouse already. This seems to create a feedback loop for the training algorithm that
    amplifies the initial erroneous guess.
    </li>
  </ul>

<P>
I think, it is a massive issue for such a critical piece of internet infrastructure that NPM has become.
Please share, repost, tweet, spread the word about this story so it would get fixed as soon as possible.
Longer term, zombie packages should be identified
and NPM users should be made aware of this issue (especially if they have zombie packages in their dependencies).
It might be a gargantuan task but a necessary one for the NPM ecosystem to remain healthy.
</P>
    </Article>
  );
}

export default Post;
