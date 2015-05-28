(function() {
    var feature1Option = function() { return {color: '#47E8D4'}; },
        feature2Option = function() { return {color: '#6BDB52'}; },
        feature3Option = function() { return {color: '#E84BA5'}; },
        feature4Option = function() { return {color: '#FFA657'}; },
        feature5Option = function() { return {color: 'red'}; },
        feature6Option = function() { return {color: 'green'};},
        feature7Option = function() { return {color: 'yellow'};},
        feature8Option = function() { return {color: 'blue'}; };

    window.myGraph = {
        featureBranch: function() {
            $(function() {
                var myTemplate = GitGraph.Template.prototype.get('blackarrow');
                var g = new GitGraph({
                    elementId: 'feature-branch-graph',
                    template: myTemplate,
                    orientation: "horizontal",
                    mode: null//"compact"
                });
                var master = g.branch('master');
                master.commit();
                master.commit();

                var fb1 = master.branch('feature-1');
                fb1.commit(feature1Option());
                fb1.commit(feature1Option());

                master.commit();

                var fb2 = master.branch('feature-2');
                fb2.commit(feature2Option());

                var fb3 = master.branch('feature-3');
                fb3.commit(feature3Option());

                fb2.commit(feature2Option());
                master.commit();
                fb2.commit(feature2Option());

                fb3.commit(feature3Option());
                fb3.merge(master);

                fb1.merge(master);
                fb2.merge(master);
            });
        },
        featureSplitted: function() {
            $(function() {
                var myTemplate = GitGraph.Template.prototype.get('blackarrow');
                var g = new GitGraph({
                    elementId: 'feature-splitted-graph',
                    template: myTemplate,
                    orientation: "horizontal",
                    mode: null//"compact"
                });
                var master = g.branch('master');
                master.commit();
                master.commit();

                var fb1 = master.branch('feature-1');
                fb1.commit(feature1Option());
                fb1.merge(master);

                var fb2 = master.branch('feature-2');
                fb2.commit(feature2Option());

                var fb3 = master.branch('feature-3');
                fb3.commit(feature3Option());

                fb2.merge(master);
                fb3.merge(master);
                fb1.delete();
                fb2.delete();
                fb3.delete();

                var fb4 = master.branch('feature-4');
                fb4.commit(feature4Option());
                fb4.merge(master);


                var fb5 = master.branch('feature-5');
                fb5.commit(feature5Option());
                fb5.merge(master);

                master.commit();

                var fb6 = master.branch('feature-6');
                fb6.commit(feature6Option());
                fb6.merge(master);
                fb6.delete();

                var fb7 = master.branch('feature-7');
                fb7.commit(feature7Option());
                fb7.merge(master);
                fb7.delete();

                master.commit();

                var fb8 = master.branch('feature-8');
                fb8.commit(feature8Option());
                fb8.merge(master);
            });
        },
        featureToggle: function() {
            $(function() {
                var myTemplate = GitGraph.Template.prototype.get('blackarrow');
                var g = new GitGraph({
                    elementId: 'feature-toggle-graph',
                    template: myTemplate,
                    orientation: "horizontal",
                    mode: null//"compact"
                });
                var master = g.branch('master');
                master.commit();
                master.commit();

                var fb1 = master.branch('feature-1');
                fb1.commit(feature1Option());
                fb1.merge(master);

                var fb2 = master.branch('feature-2');
                fb2.commit(feature2Option());

                var fb3 = master.branch('feature-3');
                fb3.commit(feature3Option());

                fb2.merge(master);
                fb3.merge(master);
                fb1.delete();
                fb2.delete();
                fb3.delete();

                var fb4 = master.branch('feature-4');
                fb4.commit(feature1Option());
                fb4.merge(master);


                var fb5 = master.branch('feature-5');
                fb5.commit(feature3Option());
                fb5.merge(master);

                master.commit();

                var fb6 = master.branch('feature-6');
                fb6.commit(feature2Option());
                fb6.merge(master);
                fb6.delete();

                var fb7 = master.branch('feature-7');
                fb7.commit(feature1Option());
                fb7.merge(master);
                fb7.delete();

                master.commit();

                var fb8 = master.branch('feature-8');
                fb8.commit(feature3Option());
                fb8.merge(master);
            });
       }
    }
})();