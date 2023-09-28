https://atomiks.github.io/tippyjs/v6/html-content/

<button class="button" data-template="one">One</button>
<button class="button" data-template="two">Two</button>
<button class="button" data-template="three">Three</button>

<div style="display: none">
  <div id="one">
      <strong>Content for `one`</strong>
    </div>
            <div id="two">
               <strong>Content for `two`</strong>
            </div>
            <div id="three">
              <strong>Content for `three`</strong>
            </div>
</div>

<script>
      // With the above scripts loaded, you can call `tippy()` with a CSS
      // selector and a `content` prop:
      tippy(".button", {
        content(reference) {
          const id = reference.getAttribute("data-template");
          const template = document.getElementById(id);
          return template.innerHTML;
        },
        allowHTML: true,
      });
</script>

Cách dùng :
