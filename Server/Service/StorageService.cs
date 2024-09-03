using Azure;
using Common;
using IService;
using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using static Common.AppConfiguration;

namespace Service
{
    public class StorageService : IStorageService
    {
        ////private readonly IRepository<FileInfoModel> _repository;
        ////private readonly BlobConfiguration _storageConfiguration;

        //public Task<List<Attachment>> CreateAttachmentFromAzureBlob(List<FileInfoModel> pathList)
        //{
        //    throw new NotImplementedException();
        //}

        //public async Task<bool> Delete(Guid id)
        //{
        //    bool response = false;
        //    try
        //    {
        //        var fileInfo = await this._repository.GetOneAsync(x => x.Id == id).ConfigureAwait(false);
        //        if (fileInfo != null)
        //        {
        //            if (CloudStorageAccount.TryParse(_storageConfiguration.StorageConnection, out CloudStorageAccount storageAccount))
        //            {
        //                CloudBlobClient BlobClient = storageAccount.CreateCloudBlobClient();
        //                CloudBlobContainer container = BlobClient.GetContainerReference(AppConstant.Tenant);

        //                if (await container.ExistsAsync())
        //                {
        //                    var blobDirectory = container.GetDirectoryReference(fileInfo.FilePath);

        //                    var file = blobDirectory.GetBlobReference(fileInfo.FileName);

        //                    if (await file.ExistsAsync())
        //                    {
        //                        await file.DeleteAsync();
        //                        await this._repository.DeleteOneAsync(x => x.Id == id).ConfigureAwait(false);
        //                        response = true;
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //    return response; ;
        //}

        //public Task<(Stream blobStream, string contentType, string name)> DownloadFile(string fileName)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<List<FileInfoModel>> List(FileInfoModel folder)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<IEnumerable<FileInfoModel>> ListofFiles(string folder)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<bool> UploadFile(IFormFile asset, string folder)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
