To try samtools and visualize a BAM file run the following commands:

* cd samtools-0.1.19/examples
* samtools faidx ex1.fa                      # index the reference FASTA
* samtools import ex1.fa.fai ex1.sam.gz ex1.bam   # SAM->BAM
* samtools index ex1.bam                # index BAM
* samtools tview ex1.bam ex1.fa         # view alignment
  