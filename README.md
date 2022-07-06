# kawaba
https://alexburneikis.github.io/kawaba/

## Creating Translations
### Single word:
```
<p>
  The quick brown <span class=tlt>{fox|xof}</span> jumped over the lazy dog
<p>
```
This example would create a paragraph where the translation for "fox" would be shown in the hovering box as "xof"

### Multiple words:
```
<p>
  <span class="ksentence">
    <span class="tlt">{Hello|olleh}</span>
    <span class="tlt">{world|dlrow)</span>
    !
  </span>
<p>
```
This example would create a paragraph where the translation for "Hello world!" would be shown as two different words in seperate hovering boxes as "olleh" and "dlrow" respectively.
