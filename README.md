# kawaba
https://alexburneikis.github.io/kawaba/

## Creating Translations
### Single word:
```
<p>
  The quick brown <span class=tlable>fox<span class="tlation">xof</span></span> jumped over the lazy dog
<p>
```
This example would create a paragraph where the translation for "fox" would be shown in the hovering box as "xof"

.tlable is the "translatable" or "fox"
.tlation is the "translation" or "xof"

### Multiple words:
```
<p>
  <span class="ksentence">
    <span class="tlable">Hello<span class="tlation">olleh</span></span> 
    <span class="tlable">world<span class="tlation">dlrow</span></span>
    !
  </span>
<p>
```
This example would create a paragraph where the translation for "Hello world!" would be shown as two different words in seperate hovering boxes as "olleh" and "dlrow" respectively.
