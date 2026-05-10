# GRETIL-mirror

DOI: [10.5281/zenodo.6486741](https://doi.org/10.5281/zenodo.6486741)

A snapshot of [GRETIL](http://gretil.sub.uni-goettingen.de/), the Göttingen Register of Electronic Texts in Indian Languages and related Indological materials from Central and Southeast Asia.

A newly-developed search interface for GRETIL, provided by Claudius Teodorescu, is available at: [https://claudius-teodorescu.gitlab.io/gretil-corpus-site/](https://claudius-teodorescu.gitlab.io/gretil-corpus-site).  For more detail, see the "Update, July 2025" section below. 

This snapshot has been placed here in Github for stability, traceability and archival security.

GRETIL's zip files have been excluded from this mirror.  
GRETIL's CSX- and REE- encoded files have been excluded from this mirror.  All files here are Unicode.

As far as I understand, all GRETIL files are also available in the [../corpustei](https://github.com/INDOLOGY/GRETIL-mirror/tree/main/gretil.sub.uni-goettingen.de/gretil/corpustei) directory in TEI/XML encoding, with the exception of the _Mahābhārata_.

The bash script used to gather the files for this Github archive is:
```bash
#!/bin/bash -x
# re-fetch all the Unicode files
wget -np -r --continue --timestamping -l7 -A "*xml","*htm","*xdxf","*txt" http://gretil.sub.uni-goettingen.de/
```
## Update, July 2025
Recently, the University of Goettingen created an archive of the GRETIL repository that is expected to be available into the foreseeable future.
Announcing this development in an [INDOLOGY post of 21 July 2025](https://list.indology.info/pipermail/indology/2025-July/060853.html), Maximilian Mehner said:
```
Over the course of the last months we at the Göttingen State and University Library (SUB) have been working on the
migration of the the Göttingen Register of Electronic Texts in Indian Languages (GRETIL) to a new platform and we
are now very happy to announce that GRETIL has found a new home in the TextGrid repository:
 
https://textgridrep.org/project/TGPR-2ba9cb1b-9602-202d-71ce-67e63a29de55
 
In its current state there are still some irregularities concerning the rendering of certain elements,
but these are being worked on. We would nevertheless be very glad to kindly invite you to test out GRETIL
in this new environment.
 
Please note that from a content perspective GRETIL is regarded as a closed project by the SUB. This means that we,
unfortunately, do not have resources to add new texts or to make philological emendations to the
existing material. Any feedback should therefore be limited to technical errors only. If, however,
you are working on specific collections of Indic material, the SUB will be able
to assist you in integrating your work into the TextGrid repository as a new project and thus
integrating it in the same repository that contains GRETIL. You can reach out to:

José Calvo Tello, calvotello at sub.uni-goettingen.de
 
for your technical feedback.
 
The old GRETIL website is still online and will be available at least until the end of the year.
The new GRETIL in TextGrid also offers the old cumulative ZIP file downloads in its previous form
(now integrated into the DARIAH-DE Repository).The GRETIL e-library will soon be available on the
edocs server of the Göttingen University (https://edocs.sub.uni-goettingen.de/).
 
In the Pali collection, we were not able to migrate the digital facsimiles of the Pali Text Society
editions due to the special layout requirements of these texts. Please do reach out to us,
if you want to work with us on this issue.
 
We have presented an in depth explanation of our work and GRETIL in TextGrid during the poster session
of the DARIAH annual event in Göttingen, on June 19, https://annualevent.dariah.eu/programme/ .
The poster can be seen at https://zenodo.org/records/15828259

We will also be presenting at the 35th Deutscher Orientalistentag DOT 2025, Erlangen,
Septembre 9, 11:30-12:00,in the session on long-term archiving of DH projects.
 
With this migration to TextGrid we are sincerely hoping to offer GRETIL a sustainable and connected future,
so it can continue to be useful for the scholarly community.
```

In a response to the above development, Claudius Teodorescu added the following information in [his post of July 22 2025](https://list.indology.info/pipermail/indology/2025-July/060854.html):
```
I would like to mention that, for the GRETIL Search Interface which I
prepared some time ago see [1], I have improved all the files in
the 1_sanskr folder, in order to make them valid XML files firstly, and
valid TEI files, secondly. A change log of the improvements can be found at
[2].

Maybe we can merge the versions of these files, in order to have a single
source of truth.

Best regards,
Claudius Teodorescu

[1] https://claudius-teodorescu.gitlab.io/gretil-corpus-site/
[2] https://github.com/sanskrit-texts/gretil-corpus?tab=readme-ov-file#changes
```
