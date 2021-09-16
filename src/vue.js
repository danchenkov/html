import "./scss/main";

$(document).ready(function() {
	Vue.config.devtools = true;

	Vue.component("post", {
		props: ["post"],
		template: "<h3>{{ post.title }}</h3>"
	});

	new Vue({
		el: "#app",
		data: {
			posts: [
				{ id: 1, title: "Target A1" },
				{ id: 2, title: "Target B2" },
				{ id: 3, title: "Target C3" },
				{ id: 4, title: "Target D4" },
				{ id: 5, title: "Target E5" },
				{ id: 6, title: "Target F6" },
				{ id: 7, title: "Target G7" },
				{ id: 8, title: "Target H8" }
			]
		}
	});

	new Vue({
		el: "#editor",
		data: {
			input: "# hello"
		},
		computed: {
			compiledMarkdown: function() {
				return marked(this.input, { sanitize: true });
			}
		},
		methods: {
			update: _.debounce(function(e) {
				this.input = e.target.value;
			}, 300)
		}
	});
});