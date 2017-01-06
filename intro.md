# ECMA/ECMAScript

A lot like the W3C, JavaScript has a standards body. Strictly __"ECMAScript"__ is a
specification/langauge that other languages track, __*ActionScript*__, __*JavaScript*__ & __*JScript*__.


## ES4
An overview of ES4 was released in October 2007, it would've been the largest change to
the spec since the ninties. It failed and was abandoned for various technical & political
reasons.
ES3.1 came along, promising to be a smaller and safer way to evolve the language and that
became known as ES5...
## ES5
You've probably used it without realising it. ES5 brought strict mode, Object.freeze(), getters
& setters and official support for the "JSON" library (stringify/parse).
## ES6
Around 2012 work started on what we call ES6, originally named ES.Harmony, then
ECMAScript 6th Edition.
In 2015 the committee responsible decided to move to define standards on an annual basis.
New features are now only added to a spec once approved rather than massive drafts that
would take longer to finalize. As a result ES6 is officially known as ES2015.

### Browser support
ES6 consists of a large number of features, browser support can vary. It's best to check on a
feature by feature basis.
Depending on your user base or the feature required it's still recommended to either
_transpile_ or _polyfill_.

### Node.js support
__Node 6.9.1__ supports all of the ES6 features we'll be going through today, without the --
harmony flag. It will eventually transition to a LTS (Long term support) release too.





# TC39 Process
The TC39 Process explains the various stages of a desired feature until it becomes adopted
and included in the language.
Without going into the specifics of the process, what is helpful to know is the various stages
a new feature goes through...
## Stage 0 "Strawman"
This is the very first stage, it's a crude starting point and it's not expected to be anywhere
near final.
## Stage 1 "Proposal"
At this point you could expect to see some demos/use cases start to be described. The
syntax is expected to change, but this is considered a feature worth spending time on.
## Stage 2 "Draft"
This is the where the proposal needs a draft covering the semantics of the feature. If a
feature makes it this far, it's fair to assume it will eventually be standardized.
## Stage 3 "Candidate"
At this point, semantics & syntax are completely laid out and the current spec text would've
been signed off by the ECMAScript editor.
## Stage 4 "Finished"
It's in the field and there's at least 2 implementations, it will get included in the next
ECMAScript revision.
Current TC39 proposals can be viewed on [GitHub](https://github.com/tc39/proposals)
