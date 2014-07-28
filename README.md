# Gift Ideas

*Gift Ideas* is a simple Meteor application demonstrating the all-packages
project structure technique.

The premise behind *Gift Ideas* is a simple gift idea list meant for parents
organizing birthday parties for their kids who need to easily send gift ideas
to the invited kids' parents.

More complex solutions exist but nearly always require logins.

And of course simpler solutions exist (email, paper) but the logistics of
sending these lists in a coordinated fashion gets tricky for the average user.

## Security

There is no security -- anyone can can add/modify/delete any list. An important
design goal of this application is to reduce friction for users to near zero.

Authentication (logins etc) add a huge barrier to entry, so it was intentionally
decided to allow anyone who knows the URL path to have full access. This
approach is very similar to the Mailinator service.

--------------------------------------------------------------------------------

## Contributors

- Mathieu Bouchard ([matb33](https://github.com/matb33))