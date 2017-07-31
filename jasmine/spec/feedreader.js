/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
            /* This is our first test suite - a test suite just contains
             * a related set of tests. This suite is all about the RSS
             * feeds definitions, the allFeeds variable in our application.
             */
describe('RSS Feeds', function() {
                /* This is our first test - it tests to make sure that the
                 * allFeeds variable has been defined and that it is not
                 * empty. Experiment with this before you get started on
                 * the rest of this project. What happens when you change
                 * allFeeds in app.js to be an empty array and refresh the
                 * page?  -> page doesn't load and we see Jasmine test info.
                 */
                it('are defined', function() {
                    expect(allFeeds).toBeDefined();
                    expect(allFeeds.length).not.toBe(0);
                });

                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */

                it('should check allFeeds names and urls are defined properly', function() {
                allFeeds.forEach(function(feed) {
                    // alert("checking allFeeds names and urls");


                    expect(feed.name).toBeDefined(); // should have a name defined
                    expect(feed.name.length).not.toBe(0); // that name should be greater than 0 characters long! 
                    expect(feed.url).toBeDefined(); // url should be defined
                    expect(feed.url.length).not.toBe(0); // url length should be greater than zero!
                });
            });
        });

                /* TODO: Write a new test suite named "The menu"   <--   NEW SUITE */

                /* TODO: Write a test that ensures the menu element is
                 * hidden by default. You'll have to analyze the HTML and
                 * the CSS to determine how we're performing the
                 * hiding/showing of the menu element.
                 */

                describe('The menu', function() {

                    it('the menu is hidden', function() {
                        var body = document.getElementsByTagName("body")[0].getAttribute("class");
                        expect(body).toBe('menu-hidden');
                    });
                });


                /* TODO: Write a test that ensures the menu changes
                 * visibility when the menu icon is clicked. This test
                 * should have two expectations: does the menu display when
                 * clicked and does it hide when clicked again.
                 */

                it('checks menu appears when clicked and dissappears when clicked again.', function() {

                    var iconToClick = document.querySelector('.menu-icon-link');
                    // alert(bodyClassName);
                    expect($('body').hasClass('menu-hidden')).toBe(true); // Menu should be hidden by default
                    // click button.
                    iconToClick.click();
                    expect($('body').hasClass('menu-hidden')).not.toBe(true); // Menu should be showing now.
                    // click again.
                    iconToClick.click();
                    // alert("Second click fired");
                    expect($('body').hasClass("menu-hidden")).toBe(true); // Menu should be hidden again.
                });
            });

            /* TODO: Write a new test suite named "Initial Entries"  <-  New SUITE */
            // This seems likely to be that trickier asynchronous one.  Remember done() from last example in 
            /* TODO: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */
            describe('Initial Entries', function() {
                    beforeEach(function(done) {
                        loadFeed(0, function() {
                            done();
                        });
                    });

                    it('should have at least one entry withing the feed container', function(done) {
                        var feed = document.getElementsByClassName('feed');
                        expect(feed.hasChildNodes()).toBe(true); // If more than 0 feed should have child nodes
                    });
                });
                /* TODO: Write a new test suite named "New Feed Selection" <- New SUITE */

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
            describe('New Feed Selection', function() {
                var feed1, feed2;
                beforeEach(function(done) {
                    loadFeed(0, function() {
                        feed1 = document.getElementsByClassName('feed').html(); // saves the first feed
                        loadFeed(1, function() {
                            feed2 = document.getElementsByClassName('feed').html(); // saved the second feed
                            done(); // makes sure this process completes before running the test
                        });
                    });

                    it('should definitely have new content when a new feed is loaded', function() {
                        // compares the two html blocks.  If they are exactly the same test fails
                        expect(feed1).not.toEqual(feed2);

                    });
                });
            });