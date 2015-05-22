(function() {
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
        fb1.commit('feature-1', {messageDisplay: true});
        fb1.commit();

        master.commit();

        var fb2 = master.branch('feature-2');
        fb2.commit();
        fb2.commit();
        fb2.commit();

        var fb3 = master.branch('feature-3');
        fb3.commit();
        master.commit();
        fb3.commit();
        fb3.merge(master);

        fb1.merge(master);
        fb2.merge(master);
    });
})();